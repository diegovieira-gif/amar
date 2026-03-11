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

const partners = [
  "Secretaria da Mulher",
  "CEBRAE",
  "Tribunal de Justiça",
  "Universidade Federal de Sergipe",
  "ONG Mulher Forte",
];

export default function SobreAmarPage() {
  const aboutSections = [
    { id: "1", title: "Nossa Missão", content: ["Promover a participação social e o bem-estar comunitário."] },
    { id: "2", title: "Nossa Visão", content: ["Uma sociedade igualitária com acesso a serviços para todos."] }
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
          <h1 className="text-3xl font-semibold text-white">Sobre o AMAR</h1>
          <p className="text-sm text-white/60">
            Conheça nosso projeto e missão
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {aboutSections.map((section) => (
            <div key={section.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <div className="flex flex-col gap-2">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-sm text-white/70 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-neutral-900">Parceiros e Rede</h2>
              <p className="text-sm text-neutral-600">Conheça as organizações que nos apoiam</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner, idx) => (
                <div key={idx} className="rounded-full bg-neutral-100 px-3 py-1">
                  <p className="text-xs font-medium text-neutral-900">{partner}</p>
                </div>
              ))}
            </div>
            <button className="w-full rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Saiba como participar
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Informações do App
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/60">Versão</p>
                <p className="text-sm font-semibold text-white">1.0.0</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/60">Build</p>
                <p className="text-sm font-semibold text-white">2025.12.17</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/60">Ambiente</p>
                <p className="text-sm font-semibold text-white">Produção</p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
            Verificar atualizações
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
