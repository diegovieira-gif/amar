"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { entrepreneurshipServices } from "@/lib/amar-mocks";
import Link from "next/link";

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getIconComponent(iconKey: string) {
  const iconMap: Record<string, React.ReactNode> = {
    scale: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v20m-8-6h16M4 8a4 4 0 0 1 8 0m8 0a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "trending-up": (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    megaphone: (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 13c1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5" strokeLinecap="round" />
        <path d="M4 9c1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5" strokeLinecap="round" />
        <path d="M10 22s-4.5-2.5-7-5.5V7.5C3 5 7.5 2.5 10 2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6v12" strokeLinecap="round" />
      </svg>
    ),
    "credit-card": (
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="2" y1="10" x2="22" y2="10" strokeLinecap="round" />
        <line x1="6" y1="16" x2="8" y2="16" strokeLinecap="round" />
      </svg>
    ),
  };

  return iconMap[iconKey] || iconMap.megaphone;
}

export default function EmpreendedorismoPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Empreendedorismo</h1>
          <p className="text-sm text-white/60">
            Apoio jurídico, financeiro e de marketing
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {entrepreneurshipServices.map((service) => (
            <div key={service.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 text-white/80">
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-white/60">{service.description}</p>
                <button className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-neutral-900">Agende uma Orientação</h2>
              <p className="text-sm text-neutral-600">Fale com um especialista sobre seu projeto</p>
            </div>
            <button className="w-full rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Agendar orientação
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Recursos
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Guia do Empreendedor</p>
              <p className="text-xs text-white/60">Materiais e orientações para iniciar seu negócio</p>
              <button className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                Acessar
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Oportunidades de Financiamento</p>
              <p className="text-xs text-white/60">Conheça linhas de crédito com juros reduzidos</p>
              <button className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
