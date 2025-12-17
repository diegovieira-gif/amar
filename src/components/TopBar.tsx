'use client';

import IconButton from "./IconButton";
import { useTheme } from "@/context/theme-context";

function IconHamburger() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 7.5h16M4 12h12M4 16.5h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="11" cy="11" r="5.5" />
      <path d="m15.5 15.5 3.25 3.25" strokeLinecap="round" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M6.5 10.5a5.5 5.5 0 0 1 11 0v2.25c0 .86.32 1.69.9 2.33l.35.38c.38.42.1 1.09-.47 1.09H5.72c-.57 0-.85-.67-.47-1.09l.35-.38c.58-.64.9-1.47.9-2.33Z"
        strokeLinecap="round"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" stroke="currentColor" fill="none" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" stroke="currentColor" fill="none" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="fixed left-1/2 top-0 z-50 flex w-full max-w-lg -translate-x-1/2 items-center justify-between gap-3 rounded-b-3xl border shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
      style={{
        backgroundColor: 'var(--bg-header)',
        borderColor: 'var(--border-soft)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <IconButton ariaLabel="Abrir menu">
        <IconHamburger />
      </IconButton>
      <div className="flex flex-1 items-center justify-center">
        <span className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: 'var(--text-secondary)' }}>AMAR</span>
      </div>
      <div className="flex items-center gap-1">
        <IconButton
          ariaLabel="Tema escuro"
          className={theme === 'dark' ? 'bg-[var(--accent-soft)]' : ''}
          onClick={() => setTheme('dark')}
        >
          <IconMoon />
        </IconButton>
        <IconButton
          ariaLabel="Tema claro"
          className={theme === 'light' ? 'bg-[var(--accent-soft)]' : ''}
          onClick={() => setTheme('light')}
        >
          <IconSun />
        </IconButton>
        <IconButton
          ariaLabel="Tema rosa"
          className={theme === 'pink' ? 'bg-[var(--accent-soft)]' : ''}
          onClick={() => setTheme('pink')}
        >
          <IconHeart />
        </IconButton>
      </div>
    </header>
  );
}
