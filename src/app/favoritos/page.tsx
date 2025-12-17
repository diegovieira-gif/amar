"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import Link from "next/link";

function IconStar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.54 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26 12 2" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FavoritosPage() {
  const isFavoritosVazio = true;

  if (isFavoritosVazio) {
    return (
      <div className="relative flex min-h-screen flex-col bg-neutral-950">
        <TopBar />
        <main className="relative flex flex-1 flex-col items-center justify-center gap-6 px-4 pb-32 pt-24">
          <div className="flex max-w-sm flex-col gap-6 rounded-3xl bg-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 self-center">
              <IconStar />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-neutral-900">Sem favoritos ainda</h2>
              <p className="text-sm text-neutral-600">
                Comece a explorar serviços e adicione seus favoritos para fácil acesso
              </p>
            </div>
            <Link
              href="/servicos"
              className="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
            >
              Explorar Serviços
              <IconArrow />
            </Link>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-white">Favoritos</h1>
          <p className="text-sm text-white/60">Seus serviços e tópicos favoritos</p>
        </div>
      </main>
      <BottomNav activeItem="Favoritos" />
    </div>
  );
}
