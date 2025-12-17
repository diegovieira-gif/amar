"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import { events } from "@/lib/amar-mocks";

function IconCalendar() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
    </svg>
  );
}

export default function CursosPage() {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: 'var(--bg-app)' }}>
      <TopBar />
      <main className="relative flex flex-1 flex-col gap-6 pb-32 pt-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Cursos e Eventos
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Participe de oficinas, palestras e cursos de capacitação
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col gap-4 rounded-2xl px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold leading-snug" style={{ color: 'var(--surface-text-primary)' }}>
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--surface-text-secondary)' }}>
                  {event.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2" style={{ color: 'var(--surface-text-secondary)' }}>
                  <IconCalendar />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--surface-text-secondary)' }}>
                  <IconClock />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--surface-text-secondary)' }}>
                  <IconMapPin />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--surface-text-secondary)' }}>
                  <IconUsers />
                  <span>{event.capacity} vagas</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ 
                  backgroundColor: 'var(--button-primary-bg)', 
                  color: 'var(--button-primary-text)'
                }}
              >
                Participar
              </button>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
