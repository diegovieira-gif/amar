import IconButton from "./IconButton";

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

function IconDots() {
  return (
    <svg aria-hidden className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <header className="fixed left-1/2 top-0 z-50 flex w-full max-w-lg -translate-x-1/2 items-center justify-between gap-3 rounded-b-3xl border border-white/5 bg-neutral-950/85 px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <IconButton ariaLabel="Abrir menu">
        <IconHamburger />
      </IconButton>
      <div className="flex flex-1 items-center justify-center">
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">AMAR</span>
      </div>
      <div className="flex items-center gap-2">
        <IconButton ariaLabel="Pesquisar">
          <IconSearch />
        </IconButton>
        <IconButton ariaLabel="Notificações">
          <IconBell />
        </IconButton>
        <IconButton ariaLabel="Mais opções">
          <IconDots />
        </IconButton>
      </div>
    </header>
  );
}
