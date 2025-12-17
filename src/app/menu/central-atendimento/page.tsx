"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { contactChannels } from "@/lib/amar-mocks";
import Link from "next/link";

function IconArrowLeft() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMessageCircle() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconComponents: Record<string, React.ReactNode> = {
  "message-circle": <IconMessageCircle />,
  phone: <IconPhone />,
  clock: <IconClock />,
  "map-pin": <IconMapPin />,
};

export default function CentralAtendimentoPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Central de Atendimento</h1>
          <p className="text-sm text-white/60">
            Como podemos ajudar você?
          </p>
        </div>

        <div className="rounded-3xl bg-white px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-neutral-900">Canais de Contato</h2>
              <p className="text-sm text-neutral-500">Escolha o melhor meio para falar conosco</p>
            </div>

            <div className="flex flex-col gap-3">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700">
                    {iconComponents[channel.icon] || <IconPhone />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-neutral-900">{channel.label}</h3>
                    <p className="text-sm text-neutral-600">{channel.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Iniciar atendimento
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Informações Gerais
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Tempo médio de resposta</p>
              <p className="text-xs text-white/60">Até 2 horas em dias úteis</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-white">Assistência em</p>
              <p className="text-xs text-white/60">Português, questões jurídicas e sociais</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
