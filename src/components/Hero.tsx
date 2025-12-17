export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-800 via-slate-900 to-neutral-950 px-6 pb-16 pt-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,214,102,0.14),transparent_40%),radial-gradient(circle_at_50%_75%,rgba(88,28,135,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/35 to-neutral-950/90" />
      </div>
      <div className="relative flex flex-col gap-4 text-white">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
          Experiência premium
        </span>
        <h1 className="text-3xl font-semibold leading-tight">Bem-vindo ao AMAR</h1>
        <p className="max-w-xl text-base leading-relaxed text-white/80">
          Curadoria de bem-estar, serviços sob medida e benefícios exclusivos que acompanham você no ritmo urbano.
        </p>
      </div>
    </section>
  );
}
