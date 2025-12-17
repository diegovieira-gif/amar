type CategoryChipProps = {
  label: string;
  active?: boolean;
};

export default function CategoryChip({ label, active = false }: CategoryChipProps) {
  return (
    <button
      type="button"
      className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition"
      style={
        active
          ? {
              backgroundColor: 'var(--accent)',
              color: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
            }
          : {
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--text-secondary)',
            }
      }
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
        }
      }}
    >
      {label}
    </button>
  );
}
