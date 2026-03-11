"use client";

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
    <section
      className="relative flex flex-col gap-4 rounded-3xl px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
      style={{
        backgroundColor: 'var(--bg-surface)',
        color: 'var(--surface-text-primary)',
      }}
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
        <p
          className="text-sm font-medium uppercase tracking-[0.12em]"
          style={{ color: 'var(--surface-text-secondary)' }}
        >
          {subtitle}
        </p>
      </div>
      <p
        className="text-base leading-relaxed"
        style={{ color: 'var(--surface-text-muted)' }}
      >
        {body}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex-1 rounded-full px-4 py-3 text-sm font-semibold transition shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: 'var(--button-primary-bg)',
            color: 'var(--button-primary-text)',
            boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          className="rounded-full px-4 py-3 text-sm font-semibold transition"
          style={{
            borderWidth: '1px',
            borderColor: 'var(--button-secondary-border)',
            color: 'var(--button-secondary-text)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {secondaryLabel}
        </button>
      </div>
    </section>
  );
}
