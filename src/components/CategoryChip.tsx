"use client";

import React from "react";

export type CategoryChipProps = {
  nome?: string;
  label?: string; // Mantido para não quebrar o page.tsx atual
  slug?: string;
  icone?: string | null;
  cor_hex?: string | null;
  active?: boolean;
};

export default function CategoryChip({ nome, label, slug, icone, cor_hex, active = false }: CategoryChipProps) {
  const displayNome = nome || label;

  return (
    <button
      type="button"
      className="shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
      style={
        active
          ? {
              backgroundColor: cor_hex || 'var(--accent)',
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
      {icone && (
        <span className="material-symbols-outlined text-base">
          {icone}
        </span>
      )}
      {displayNome}
    </button>
  );
}
