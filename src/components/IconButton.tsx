import { ReactNode } from "react";

type IconButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
};

export default function IconButton({
  ariaLabel,
  children,
  className,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
