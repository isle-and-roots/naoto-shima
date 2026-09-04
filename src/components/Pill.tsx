import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import type { Tone } from "../content";

export type PillVariant =
  | "primary"
  | "secondary"
  | "aubergine"
  | "paper"
  | "bone"
  | "ash"
  | "ghost"
  | "dark"
  | Tone;

interface BasePillProps {
  variant?: PillVariant;
  size?: "sm" | "md" | "lg";
  arrow?: "diagonal" | "right" | "left" | "none";
  children: ReactNode;
  className?: string;
}

function pillClass({ variant = "primary", size = "md", className }: BasePillProps) {
  return ["pill", `pill--${variant}`, `pill--${size}`, className].filter(Boolean).join(" ");
}

function Arrow({ kind }: { kind: NonNullable<BasePillProps["arrow"]> }) {
  if (kind === "none") return null;
  const d =
    kind === "diagonal"
      ? "M5 12 12 5M6 5h6v6"
      : kind === "right"
        ? "M3.5 8.5h9m-3.5-3.5 3.5 3.5-3.5 3.5"
        : "M13.5 8.5h-9M8 5 4.5 8.5 8 12";
  return (
    <svg className="pill__arrow" viewBox="0 0 17 17" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type PillLinkProps = BasePillProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

export function PillLink({ arrow = "none", children, ...rest }: PillLinkProps) {
  const { variant, size, className, ...anchor } = rest;
  return (
    <a className={pillClass({ variant, size, className, children })} {...anchor}>
      {arrow === "left" && <Arrow kind="left" />}
      <span>{children}</span>
      {arrow !== "left" && <Arrow kind={arrow} />}
    </a>
  );
}

type PillButtonProps = BasePillProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function PillButton({ arrow = "none", children, ...rest }: PillButtonProps) {
  const { variant, size, className, ...button } = rest;
  return (
    <button type="button" className={pillClass({ variant, size, className, children })} {...button}>
      <span>{children}</span>
      <Arrow kind={arrow} />
    </button>
  );
}

/** Small non-interactive label chip (tags use the same 100px radius as buttons). */
export function Tag({
  tone = "ghost",
  children,
  className,
}: {
  tone?: PillVariant;
  children: ReactNode;
  className?: string;
}) {
  return <span className={["tag", `tag--${tone}`, className].filter(Boolean).join(" ")}>{children}</span>;
}
