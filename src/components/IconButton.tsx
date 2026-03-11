"use client";

import { ReactNode } from "react";

type IconButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export default function IconButton({
  ariaLabel,
  children,
  className,
  onClick,
  isActive = false,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-primary)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className ?? ""}`}
      style={{
        backgroundColor: isActive ? 'var(--accent-soft)' : 'var(--accent-soft)',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
        }
      }}
    >
      {children}
    </button>
  );
}
