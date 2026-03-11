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

export default function TermosPrivacidadePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <Link href="/menu" className="inline-flex w-fit items-center gap-2 text-white/60 transition hover:text-white">
          <IconArrowLeft />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Termos e Privacidade</h1>
          <p className="text-sm text-white/60">
            Políticas e segurança de dados
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {termsSections.map((section) => (
            <div key={section.id} className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="text-sm text-white/70 leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-semibold text-white">Dúvidas ou Preocupações?</h3>
            <p className="text-sm text-white/60">
              Se você tiver perguntas sobre nossos termos ou políticas de privacidade, entre em contato com nossa equipe de suporte.
            </p>
            <button className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
              Fale conosco
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
              Última Atualização
            </h2>
          </div>

          <p className="text-xs text-white/50">
            Estes termos foram atualizados em 17 de dezembro de 2025. O AMAR se reserva o direito de atualizar estas políticas a qualquer momento. Mudanças significativas serão notificadas aos usuários.
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
