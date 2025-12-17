type CategoryChipProps = {
  label: string;
  active?: boolean;
};

export default function CategoryChip({ label, active = false }: CategoryChipProps) {
  return (
    <button
      type="button"
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-white text-neutral-900 shadow-md"
          : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
