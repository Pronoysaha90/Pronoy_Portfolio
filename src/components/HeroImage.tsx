export default function HeroImage() {
  return (
    <div className="hero-film is-idle relative mx-auto h-full w-fit flex items-end justify-center">
      {/* Ambient floor glow pool matching theme */}
      <div aria-hidden="true" className="hero-film__pool" />
      <img
        src="/assets/PronoyProfile.png"
        alt="Pronoy Saha"
        className="hero-film__media block h-full w-auto max-h-[85svh] max-w-full object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
