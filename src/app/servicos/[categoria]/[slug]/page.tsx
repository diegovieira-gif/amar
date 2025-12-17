"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { getServiceBySlug, getCategoryById } from "@/lib/amar-mocks";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

type PageProps = {
  params: Promise<{ categoria: string; slug: string }>;
};

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceDetailPage({ params }: PageProps) {
  const router = useRouter();
  const [categoria, setCategoria] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useMemo(() => {
    params.then(p => {
      setCategoria(p.categoria);
      setSlug(p.slug);
    });
  }, [params]);

  const service = slug ? getServiceBySlug(slug) : null;
  const category = categoria ? getCategoryById(categoria) : null;

  useEffect(() => {
    if (service && categoria && service.pillarId !== categoria) {
      notFound();
    }
  }, [service, categoria]);

  if (!categoria || !slug) {
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

  if (!service || !category) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link 
          href={`/servicos/${categoria}`} 
          className="inline-flex w-fit items-center gap-2 transition hover:opacity-80" 
          style={{ color: 'var(--text-secondary)' }}
        >
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <section className="relative overflow-hidden rounded-3xl px-6 pb-12 pt-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]" style={{ 
          background: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-mid), var(--gradient-end))' 
        }}>
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, var(--gradient-overlay))' }} />
          </div>
          <div className="relative flex flex-col gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
              {category.title}
            </span>
            <h1 className="text-2xl font-semibold leading-tight">{service.title}</h1>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {service.description}
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Sobre este serviço
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {service.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Como funciona
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {service.howItWorks}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>
            Próximos passos
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
            {service.contact}
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-full px-6 py-4 text-base font-semibold shadow-lg transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ 
            backgroundColor: 'var(--button-primary-bg)', 
            color: 'var(--button-primary-text)',
            outlineColor: 'var(--button-primary-bg)'
          }}
        >
          Continuar
        </button>
      </main>
      <BottomNav />
    </div>
  );
}
