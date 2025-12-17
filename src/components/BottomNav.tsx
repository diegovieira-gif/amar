'use client';

import { usePathname } from "next/navigation";

function IconHome() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m4.5 10.5 6.8-5.1a1.2 1.2 0 0 1 1.4 0l6.8 5.1V19a1 1 0 0 1-1 1h-4.5a.8.8 0 0 1-.8-.8v-3.4a.8.8 0 0 0-.8-.8H11a.8.8 0 0 0-.8.8v3.4a.8.8 0 0 1-.8.8H5.8a1 1 0 0 1-1-1Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconServices() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="6.5" width="16" height="11" rx="2" />
      <path d="M9.5 9.5h5" strokeLinecap="round" />
      <path d="M12 6.5v-1" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="9" r="3.25" />
      <path d="M6.5 18.6a5.94 5.94 0 0 1 11 0" strokeLinecap="round" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4.5 7h15M7 12h10.5M9.5 17H19" strokeLinecap="round" />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  const getActiveLabel = (path: string): string => {
    if (path.startsWith("/servicos")) return "Serviços";
    if (path.startsWith("/comunidade")) return "Comunidade";
    if (path.startsWith("/favoritos")) return "Favoritos";
    if (path.startsWith("/perfil")) return "Perfil";
    if (path.startsWith("/menu")) return "Menu";
    return "Home";
  };

  const activeLabel = getActiveLabel(pathname);

  const items = [
    { label: "Home", icon: <IconHome />, href: "/" },
    { label: "Serviços", icon: <IconServices />, href: "/servicos" },
    { label: "Comunidade", icon: <IconMenu />, href: "/comunidade" },
    { label: "Favoritos", icon: <IconHeart />, href: "/favoritos" },
    { label: "Perfil", icon: <IconUser />, href: "/perfil" },
  ];

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex w-[min(420px,calc(100%-2rem))] -translate-x-1/2 items-center justify-between rounded-full border px-3 py-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
      style={{
        backgroundColor: 'var(--accent-soft)',
        borderColor: 'var(--border-soft)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {items.map((item) => {
        const isActive = item.label === activeLabel;
        return (
          <a
            key={item.label}
            href={item.href}
            className="group flex flex-1 flex-col items-center gap-1 text-[11px] font-semibold transition"
            style={{
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full transition"
              style={{
                backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.icon}
            </span>
            <span className="leading-none">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
