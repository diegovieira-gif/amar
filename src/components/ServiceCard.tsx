import Link from "next/link";

function IconWrench() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3v3M18 12h3M12 18v3M6 12H3M17.5 6.5l-1.5 1.5M17.5 17.5l-1.5-1.5M6.5 17.5l1.5-1.5M6.5 6.5l1.5 1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconScale() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3v18M3 6l9-3 9 3M6 6v6a6 6 0 0 0 12 0V6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
      <path d="M9 10h6" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 11h14M5 11l1.5-5h11L19 11M5 11v7a1 1 0 0 0 1 1h1m11-8v7a1 1 0 0 1-1 1h-1m-9-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 3v18h18M7 16l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap: Record<string, JSX.Element> = {
  wrench: <IconWrench />,
  sparkles: <IconSparkles />,
  scale: <IconScale />,
  heart: <IconHeart />,
  book: <IconBook />,
  shield: <IconShield />,
  car: <IconCar />,
  chart: <IconChart />,
};

type ServiceCardProps = {
  slug: string;
  title: string;
  description: string;
  iconKey: string;
};

export default function ServiceCard({ slug, title, description, iconKey }: ServiceCardProps) {
  const icon = iconMap[iconKey] || iconMap.wrench;

  return (
    <Link href={`/servicos/${slug}`}>
      <div
        className="flex items-center gap-4 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: 'var(--bg-surface)' }}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: 'var(--button-primary-bg)' }}
        >
          {icon}
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-base font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            {title}
          </h3>
          <p className="line-clamp-1 text-sm" style={{ color: 'var(--surface-text-secondary)' }}>
            {description}
          </p>
        </div>
        <div style={{ color: 'var(--surface-text-secondary)' }}>
          <IconChevron />
        </div>
      </div>
    </Link>
  );
}
