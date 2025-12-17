type SurfaceCardProps = {
  title: string;
  subtitle: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export default function SurfaceCard({
  title,
  subtitle,
  body,
  primaryLabel,
  secondaryLabel,
}: SurfaceCardProps) {
  return (
    <section className="relative flex flex-col gap-4 rounded-3xl bg-white px-6 py-7 text-neutral-900 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-neutral-400">{subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-neutral-700">{body}</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex-1 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          className="rounded-full border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-300 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-300"
        >
          {secondaryLabel}
        </button>
      </div>
    </section>
  );
}
