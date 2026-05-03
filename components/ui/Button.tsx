import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "gold";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-gold hover:bg-navy-light",
  secondary:
    "bg-cream-dark border border-cream-border text-navy hover:border-navy",
  ghost:
    "bg-transparent text-navy hover:bg-cream-dark",
  danger:
    "bg-[var(--color-error)] text-white hover:opacity-90",
  gold:
    "bg-gold text-navy hover:bg-gold-light",
};

const sizeClasses: Record<Size, string> = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4 text-base",
  lg: "py-4 px-5 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`font-serif font-bold rounded-2xl transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  href,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-block text-center font-serif font-bold rounded-2xl transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? "block w-full" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
