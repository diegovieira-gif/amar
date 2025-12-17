"use client";

import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { menuItems } from "@/lib/amar-mocks";

function IconChevronRight() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getIconComponent(iconKey: string) {
  const iconMap: Record<string, React.ReactNode> = {
    headphones: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" />
        <path d="M9 22c0 1-1 2-2 2s-2-1-2-2m10 0c0 1 1 2 2 2s2-1 2-2" strokeLinecap="round" />
      </svg>
    ),
    alert: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0Z" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" />
      </svg>
    ),
    award: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="7" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    briefcase: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "heart-hands": (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 8l2-3a2 2 0 0 1 3 0v0a2 2 0 0 1 0 3l-5 5-5-5a2 2 0 0 1 0-3v0a2 2 0 0 1 3 0l2 3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13h10M6 17h4m4 0h4" strokeLinecap="round" />
      </svg>
    ),
    "shield-check": (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 12 12 15 15 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    info: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="16" x2="12" y2="12" strokeLinecap="round" />
        <line x1="12" y1="8" x2="12.01" y2="8" strokeLinecap="round" />
      </svg>
    ),
  };

  return iconMap[iconKey] || iconMap.info;
}

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Menu</h1>
          <p className="text-sm text-white/60">
            Acesse serviços, informações e suporte
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 text-white/80">
                      {getIconComponent(item.iconKey)}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-white">{item.label}</h3>
                      <p className="text-xs text-white/50">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-white/40 transition group-hover:text-white/70">
                    <IconChevronRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
