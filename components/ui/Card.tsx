import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "surface" | "navy" | "cream";
  as?: "div" | "section" | "article";
}

const variants = {
  surface: "bg-white border border-cream-border",
  navy: "bg-navy text-cream",
  cream: "bg-cream-dark border border-cream-border",
};

export function Card({ children, className = "", variant = "surface", as: Tag = "div" }: CardProps) {
  return (
    <Tag className={`rounded-2xl ${variants[variant]} ${className}`}>{children}</Tag>
  );
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-5 pt-5 pb-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}
