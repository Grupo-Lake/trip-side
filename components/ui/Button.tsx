"use client";

import { CSSProperties, ElementType, ReactNode, useState } from "react";

type Variant = "roxo" | "branco" | "vermelho" | "contorno" | "fantasma";
type Size = "sm" | "md" | "lg";

const BORDER: CSSProperties = { borderWidth: 2, borderStyle: "solid" };

const VARIANTS: Record<Variant, CSSProperties> = {
  roxo: { background: "var(--ts-roxo)", color: "var(--ts-off-white)", ...BORDER, borderColor: "var(--ts-roxo)" },
  branco: { background: "var(--ts-off-white)", color: "var(--ts-preto)", ...BORDER, borderColor: "var(--ts-off-white)" },
  vermelho: { background: "var(--ts-vermelho)", color: "var(--ts-off-white)", ...BORDER, borderColor: "var(--ts-vermelho)" },
  contorno: { background: "transparent", color: "var(--ts-off-white)", ...BORDER, borderColor: "var(--stroke-media)" },
  fantasma: { background: "transparent", color: "var(--ts-off-white)", ...BORDER, borderColor: "transparent" },
};

const HOVER: Record<Variant, CSSProperties> = {
  roxo: { background: "var(--ts-roxo-800)", borderColor: "var(--ts-roxo-800)" },
  branco: { background: "var(--ts-cinza-100)", borderColor: "var(--ts-cinza-100)" },
  vermelho: { background: "var(--ts-vermelho-escuro)", borderColor: "var(--ts-vermelho-escuro)" },
  contorno: { background: "var(--ts-off-white)", color: "var(--ts-preto)", borderColor: "var(--ts-off-white)" },
  fantasma: { background: "rgba(239,233,222,.1)" },
};

const SIZES: Record<Size, CSSProperties> = {
  sm: { height: 36, padding: "0 14px", fontSize: "var(--tam-3xs)", letterSpacing: "var(--track-label)" },
  md: { height: 44, padding: "0 22px", fontSize: "var(--tam-2xs)", letterSpacing: "var(--track-label)" },
  lg: { height: 56, padding: "0 34px", fontSize: "var(--tam-sm)", letterSpacing: "var(--track-label)" },
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
}

export function Button({
  variant = "roxo",
  size = "md",
  block = false,
  disabled = false,
  as: Tag = "button",
  style,
  children,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const base: CSSProperties = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--esp-2)",
    fontFamily: "var(--font-core)",
    fontWeight: "var(--peso-black)" as unknown as number,
    textTransform: "uppercase",
    borderRadius: "var(--raio-botao)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition:
      "background var(--dur-rapido) var(--ease-padrao),color var(--dur-rapido) var(--ease-padrao),border-color var(--dur-rapido) var(--ease-padrao),transform var(--dur-instantaneo) var(--ease-padrao)",
    transform: press ? "translateY(1px)" : "none",
    opacity: disabled ? 0.38 : 1,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };

  return (
    <Tag
      style={base}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
