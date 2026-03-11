"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
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
  const userProfileMock = {
    name: "Cidadão Exemplo",
    neighborhood: "Centro",
    status: "Ativo",
    coursesCompleted: 2,
    eventsAttended: 5,
    servicesAccessed: 3
  };

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-4 rounded-3xl px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full text-white font-bold text-lg" style={{ background: 'linear-gradient(to bottom right, rgb(192, 132, 252), rgb(244, 114, 182))' }}>
              {userProfileMock.name.charAt(0)}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold" style={{ color: 'var(--surface-text-primary)' }}>{userProfileMock.name}</h2>
              <p className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>{userProfileMock.neighborhood}</p>
              <span className="text-xs font-medium" style={{ color: 'var(--surface-text-secondary)' }}>{userProfileMock.status}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-2 rounded-2xl px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <IconEdit />
              <span className="text-xs font-medium" style={{ color: 'var(--surface-text-primary)' }}>Editar</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-2xl px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <IconBell />
              <span className="text-xs font-medium" style={{ color: 'var(--surface-text-primary)' }}>Notif.</span>
            </button>
            <Link
              href="/perfil/avaliacao"
              className="flex flex-col items-center gap-2 rounded-2xl px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <IconStar />
              <span className="text-xs font-medium" style={{ color: 'var(--surface-text-primary)' }}>Avaliação</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            Minha Jornada
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <IconBook />
              <span className="text-2xl font-bold" style={{ color: 'var(--surface-text-primary)' }}>
                {userProfileMock.coursesCompleted}
              </span>
              <span className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>Cursos</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <IconTrendingUp />
              <span className="text-2xl font-bold" style={{ color: 'var(--surface-text-primary)' }}>
                {userProfileMock.eventsAttended}
              </span>
              <span className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>Eventos</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <IconStar />
              <span className="text-2xl font-bold" style={{ color: 'var(--surface-text-primary)' }}>
                {userProfileMock.servicesAccessed}
              </span>
              <span className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>Serviços</span>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
