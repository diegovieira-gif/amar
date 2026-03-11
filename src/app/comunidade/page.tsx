"use client";

import BottomNav from "@/components/BottomNav";
import SurfaceCard from "@/components/SurfaceCard";
import TopBar from "@/components/TopBar";
import Link from "next/link";

function IconComments() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function ComunidadePage() {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>Comunidade</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Participação social, eventos e fóruns de discussão
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            Pesquisas em Andamento
          </h2>
          <div className="flex flex-col gap-3">
            {surveys
              .filter((s) => s.status === "active")
              .map((survey) => (
                <button
                  key={survey.id}
                  className="flex flex-col gap-3 rounded-2xl px-5 py-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold" style={{ color: 'var(--surface-text-primary)' }}>{survey.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--surface-text-secondary)' }}>{survey.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>
                      {survey.respondents} respostas
                    </span>
                    <span className="rounded-full px-4 py-2 text-xs font-semibold" style={{ backgroundColor: 'var(--button-primary-bg)', color: 'var(--button-primary-text)' }}>
                      Responder
                    </span>
                  </div>
                </button>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            Eventos e Oficinas
          </h2>
          <div className="flex flex-col gap-3">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="flex flex-col gap-3 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold" style={{ color: 'var(--surface-text-primary)' }}>{event.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--surface-text-secondary)' }}>{event.description}</p>
                </div>
                <div className="flex flex-col gap-2 text-xs" style={{ color: 'var(--surface-text-secondary)' }}>
                  <div className="flex items-center gap-2">
                    <IconCalendar />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕐 {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                <button className="rounded-full px-4 py-2 text-xs font-semibold transition" style={{ backgroundColor: 'var(--button-primary-bg)', color: 'var(--button-primary-text)' }}>
                  Participar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--text-secondary)' }}>
            Fóruns Temáticos
          </h2>
          <div className="flex flex-col gap-3">
            {communityTopics.map((topic) => (
              <Link key={topic.id} href={`/comunidade/${topic.id}`}>
                <div className="flex flex-col gap-3 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold" style={{ color: 'var(--surface-text-primary)' }}>{topic.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--surface-text-secondary)' }}>{topic.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--surface-text-secondary)' }}>
                      <IconComments />
                      <span>{topic.messagesCount} mensagens</span>
                    </div>
                    <span className="text-xs" style={{ color: 'var(--surface-text-secondary)' }}>{topic.lastActivity}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
