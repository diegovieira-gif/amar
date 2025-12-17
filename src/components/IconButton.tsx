import { ReactNode } from "react";

type IconButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function IconButton({
  ariaLabel,
  children,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-primary)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className ?? ""}`}
      style={{
        backgroundColor: className && className.includes('bg-[var(--accent-soft)]') ? 'var(--accent-soft)' : 'var(--accent-soft)',
      }}
      onMouseEnter={(e) => {
        if (!className?.includes('bg-[var(--accent-soft)]')) {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if (!className?.includes('bg-[var(--accent-soft)]')) {
          e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
        }
      }}
    >
      {children}
    </button>
  );
}
