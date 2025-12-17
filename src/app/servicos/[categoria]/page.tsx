"use client";

import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";
import TopBar from "@/components/TopBar";
import { getCategoryById, getServicesByCategory, groupServicesByModality } from "@/lib/amar-mocks";
import Link from "next/link";
import { useState, useMemo } from "react";

type PageProps = {
  params: Promise<{ categoria: string }>;
};

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
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

function getIconComponent(iconKey: string) {
  const icons: Record<string, JSX.Element> = {
    "heart-hands": (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-8-4-8-10V5l8-3 8 3v6c0 6-8 10-8 10Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "map-pin": (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    scale: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v18M3 6l9-3 9 3M6 6v6a6 6 0 0 0 12 0V6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    lock: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
      </svg>
    ),
    heart: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19s-6-3.7-6-8.2C6 8 7.8 6.2 10 6.2c1.2 0 2.3.6 3 1.5.7-.9 1.8-1.5 3-1.5 2.2 0 4 1.8 4 4.6 0 4.5-6 8.2-6 8.2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    briefcase: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeLinecap="round" />
      </svg>
    ),
    document: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" />
      </svg>
    ),
    "credit-card": (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" strokeLinecap="round" />
      </svg>
    ),
    megaphone: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m3 11 18-5v12L3 13v-2Z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" strokeLinecap="round" />
      </svg>
    ),
    target: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    "trending-up": (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m23 6-9.5 9.5-5-5L1 18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m17 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    rocket: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    calendar: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    ),
    chat: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      </svg>
    ),
    star: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    message: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M8 10h8M8 14h4" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[iconKey] || icons.heart;
}

export default function CategoryServicesPage({ params }: PageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoria, setCategoria] = useState<string | null>(null);

  useMemo(() => {
    params.then(p => setCategoria(p.categoria));
  }, [params]);

  const category = categoria ? getCategoryById(categoria) : null;
  const allServices = categoria ? getServicesByCategory(categoria) : [];

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return allServices;

    const query = searchQuery.toLowerCase();
    return allServices.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
    );
  }, [allServices, searchQuery]);

  const groupedServices = useMemo(
    () => groupServicesByModality(filteredServices),
    [filteredServices]
  );

  if (!categoria) {
    return (
      <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
        <TopBar />
        <main className="relative flex flex-1 flex-col items-center justify-center pb-32 pt-24">
          <p style={{ color: 'var(--text-secondary)' }}>Carregando...</p>
        </main>
        <BottomNav />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
        <TopBar />
        <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
          <Link href="/servicos" className="inline-flex w-fit items-center gap-2 transition" style={{ color: 'var(--text-secondary)' }}>
            <IconArrowLeft />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--accent-soft)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Categoria não encontrada.
            </p>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/servicos" className="inline-flex w-fit items-center gap-2 transition hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            {category.title}
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {category.description}
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-col gap-8">
          {groupedServices.length > 0 ? (
            groupedServices.map((group) => (
              <div key={group.modality} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
                  {group.modality}
                </h2>
                <div className="flex flex-col gap-3">
                  {group.services.map((service) => (
                    <Link key={service.slug} href={`/servicos/${categoria}/${service.slug}`}>
                      <div
                        className="flex items-center gap-4 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                        style={{ backgroundColor: 'var(--bg-surface)' }}
                      >
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                          style={{ backgroundColor: 'var(--button-primary-bg)' }}
                        >
                          {getIconComponent(service.iconKey)}
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                          <h3 className="text-base font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
                            {service.title}
                          </h3>
                          <p className="text-sm" style={{ color: 'var(--surface-text-secondary)' }}>
                            {service.description}
                          </p>
                        </div>
                        <div style={{ color: 'var(--surface-text-secondary)' }}>
                          <IconChevron />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4 rounded-2xl border px-5 py-8 text-center" style={{ borderColor: 'var(--border-soft)', backgroundColor: 'var(--accent-soft)' }}>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Nenhum serviço encontrado.
              </p>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
