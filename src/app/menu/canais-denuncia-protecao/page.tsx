"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAlertCircle() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" />
    </svg>
  );
}

export default function CanalsDenunciaProtecaoPage() {
  const hotlineNumbers = [
    { number: "180", label: "Central de Atendimento à Mulher", description: "Serviço escuta e acolhe denúncias de violência contra a mulher." },
    { number: "190", label: "Polícia Militar", description: "Para situações de risco imediato e emergência." },
    { number: "100", label: "Disque Direitos Humanos", description: "Para denunciar violações de direitos humanos." }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Canais de Denúncia e Proteção</h1>
          <p className="text-sm text-white/60">
            Denuncie com segurança e anonimato
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 px-4 py-3 flex items-start gap-3">
          <IconAlertCircle />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-red-300">Risco Iminente?</p>
            <p className="text-xs text-red-200">Se estiver em risco, ligue IMEDIATAMENTE para 190 (Polícia) ou 192 (SAMU)</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {hotlineNumbers.map((item, idx) => (
            <div key={idx} className="rounded-3xl bg-white px-6 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-4xl font-bold text-neutral-900">{item.number}</p>
                  <p className="text-sm font-semibold text-neutral-700 mt-1">{item.label}</p>
                </div>
                <p className="text-sm text-neutral-600">{item.description}</p>
                <button className="w-full rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                  Ligar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Recursos Adicionais
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Denúncia Anônima Online</p>
              <p className="text-xs text-white/60">Acesse plataformas de denúncia do governo sem se identificar</p>
              <button className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                Acessar
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Proteção de Dados Pessoais</p>
              <p className="text-xs text-white/60">Suas informações são confidenciais. Saiba como nos protegemos</p>
              <button className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
