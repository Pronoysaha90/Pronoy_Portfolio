export default function HeroImage() {
  return (
    <div className="hero-film is-idle relative mx-auto h-full w-fit flex items-end justify-center">
      {/* Ambient floor glow pool matching theme */}
      <div aria-hidden="true" className="hero-film__pool" />
      <picture className="block h-full w-auto max-h-[85svh] max-w-full">
        <source
          media="(max-width: 767px)"
          srcSet="/assets/PronoyProfile-mobile.webp"
          type="image/webp"
        />
        <source
          srcSet="/assets/PronoyProfile.webp"
          type="image/webp"
        />
        <img
          src="/assets/PronoyProfile.webp"
          alt="Pronoy Saha"
          width={1230}
          height={1279}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="hero-film__media block h-full w-auto max-h-[85svh] max-w-full object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
          }}
        />
      </picture>
    </div>
  );
}
