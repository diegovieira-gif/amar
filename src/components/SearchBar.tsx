function IconSearch() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="5.5" />
      <path d="m15.5 15.5 3.25 3.25" strokeLinecap="round" />
    </svg>
  );
}

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <span className="text-neutral-400">
        <IconSearch />
      </span>
      <input
        type="text"
        placeholder="Pesquisar serviços..."
        readOnly
        className="flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
      />
    </div>
  );
}
