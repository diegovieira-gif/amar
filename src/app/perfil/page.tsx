"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { userProfileMock } from "@/lib/amar-mocks";
import Link from "next/link";

function IconEdit() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M6.5 10.5a5.5 5.5 0 0 1 11 0v2.25c0 .86.32 1.69.9 2.33l.35.38c.38.42.1 1.09-.47 1.09H5.72c-.57 0-.85-.67-.47-1.09l.35-.38c.58-.64.9-1.47.9-2.33Z"
        strokeLinecap="round"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polygon points="12 2 15.09 10.26 23.77 10.36 17.13 16.01 19.09 24.29 12 18.54 4.91 24.29 6.87 16.01 0.23 10.36 8.91 10.26 12 2" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export default function PerfilPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 text-white font-bold text-lg">
              {userProfileMock.name.charAt(0)}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-neutral-900">{userProfileMock.name}</h2>
              <p className="text-xs text-neutral-500">{userProfileMock.neighborhood}</p>
              <span className="text-xs font-medium text-neutral-600">{userProfileMock.status}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <IconEdit />
              <span className="text-xs font-medium text-neutral-900">Editar</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <IconBell />
              <span className="text-xs font-medium text-neutral-900">Notif.</span>
            </button>
            <Link
              href="/perfil/avaliacao"
              className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <IconStar />
              <span className="text-xs font-medium text-neutral-900">Avaliação</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
            Minha Jornada
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <IconBook />
              <span className="text-2xl font-bold text-neutral-900">
                {userProfileMock.coursesCompleted}
              </span>
              <span className="text-xs text-neutral-600">Cursos</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <IconTrendingUp />
              <span className="text-2xl font-bold text-neutral-900">
                {userProfileMock.eventsAttended}
              </span>
              <span className="text-xs text-neutral-600">Eventos</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <IconStar />
              <span className="text-2xl font-bold text-neutral-900">
                {userProfileMock.servicesAccessed}
              </span>
              <span className="text-xs text-neutral-600">Serviços</span>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
