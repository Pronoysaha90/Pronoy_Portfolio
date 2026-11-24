import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Transparent walking video with alpha channel fading into dark background.
 * Falls back to still portrait if video cannot play.
 */
const SRC = {
  webm: '/assets/hero-walk.webm',
  hevc: '/assets/hero-walk.mov',
  start: '/assets/hero-walk-start.webp',
  end: '/assets/hero-walk-end.webp',
  width: 620,
  height: 906,
};

const isSafari = () =>
  typeof navigator !== 'undefined' && /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);

export default function HeroVideo({ play = true }: { play?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stillRef = useRef<HTMLImageElement | null>(null);
  const reduce = useReducedMotion();
  const [ended, setEnded] = useState(false);
  const [src] = useState(() =>
    isSafari() ? { url: SRC.hevc, type: 'video/quicktime' } : { url: SRC.webm, type: 'video/webm' }
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const video = videoRef.current;
    let started = false;
    let raf = 0;
    let vfc = 0;

    const still = new Image();
    still.src = reduce ? SRC.end : SRC.start;
    stillRef.current = still;

    const paint = () => {
      const source: CanvasImageSource | null =
        video && started && video.readyState >= 2 ? video : still.complete && still.naturalWidth ? still : null;
      if (!source) return;
      const { width: w, height: h } = canvas;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(source, 0, 0, w, h);

      // Solid #080808 background falloff
      const [r, g, b] = [8, 8, 8];
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
      grad.addColorStop(0.38, `rgba(${r},${g},${b},0)`);
      grad.addColorStop(0.62, `rgba(${r},${g},${b},0.45)`);
      grad.addColorStop(0.84, `rgba(${r},${g},${b},0.88)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},1)`);

      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
    };

    const v = video as (HTMLVideoElement & {
      requestVideoFrameCallback?: (cb: () => void) => number;
      cancelVideoFrameCallback?: (id: number) => void;
    }) | null;

    const loop = () => {
      paint();
      if (!v || v.paused || v.ended) return;
      if (v.requestVideoFrameCallback) vfc = v.requestVideoFrameCallback(loop);
      else raf = requestAnimationFrame(loop);
    };

    const onPlay = () => {
      started = true;
      loop();
    };
    const onEnded = () => {
      paint();
      setEnded(true);
    };

    still.onload = paint;
    v?.addEventListener('play', onPlay);
    v?.addEventListener('seeked', paint);
    v?.addEventListener('ended', onEnded);

    paint();

    return () => {
      cancelAnimationFrame(raf);
      if (vfc && v?.cancelVideoFrameCallback) v.cancelVideoFrameCallback(vfc);
      v?.removeEventListener('play', onPlay);
      v?.removeEventListener('seeked', paint);
      v?.removeEventListener('ended', onEnded);
    };
  }, [reduce]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !play || reduce) return;
    v.currentTime = 0;
    v.play()?.catch(() => {
      if (stillRef.current) stillRef.current.src = SRC.end;
      setEnded(true);
    });
  }, [play, reduce]);

  const replay = () => {
    const v = videoRef.current;
    if (!v || reduce) return;
    setEnded(false);
    v.currentTime = 0;
    void v.play();
  };

  return (
    <div className={`hero-film relative mx-auto h-full w-fit ${ended || reduce ? 'is-idle' : ''}`}>
      <div aria-hidden="true" className="hero-film__pool" />
      <canvas
        ref={canvasRef}
        width={SRC.width}
        height={SRC.height}
        role="img"
        aria-label="Portrait of developer"
        onDoubleClick={replay}
        className="hero-film__media block h-full w-auto max-w-none select-none"
      />
      {!reduce && (
        <video
          ref={videoRef}
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
          width={SRC.width}
          height={SRC.height}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          <source src={src.url} type={src.type} />
        </video>
      )}
    </div>
  );
}
