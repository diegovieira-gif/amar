export default function Hero() {
  return (
    <section
      className="relative mt-16 overflow-hidden rounded-3xl px-6 pb-16 pt-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      style={{
        background: `linear-gradient(180deg, var(--bg-surface-muted) 0%, color-mix(in srgb, var(--bg-surface) 80%, var(--accent) 20%) 50%, var(--bg-app) 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), transparent 35%),
                         radial-gradient(circle at 80% 0%, rgba(255, 214, 102, 0.14), transparent 40%),
                         radial-gradient(circle at 50% 75%, rgba(88, 28, 135, 0.12), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, color-mix(in srgb, var(--bg-app) 35%, transparent), color-mix(in srgb, var(--bg-app) 90%, transparent))`,
          }}
        />
      </div>
      <div className="relative flex flex-col gap-4">
        <span
          className="text-xs font-medium uppercase tracking-[0.3em]"
          style={{ color: 'var(--text-secondary)' }}
        >
          Acolhimento e Fortalecimento
        </span>
        <h1 className="text-3xl font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
          Bem-vinda ao AMAR
        </h1>
        <p
          className="max-w-xl text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Um espaço seguro e integrado da Prefeitura de Aracaju, criado para acolher, orientar e fortalecer você.
        </p>
      </div>
    </section>
  );
}
