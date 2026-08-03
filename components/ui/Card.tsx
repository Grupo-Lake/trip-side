import { CSSProperties, ReactNode } from "react";

type Variant = "concreto" | "contorno" | "roxo" | "papel";

const VARIANTS: Record<Variant, CSSProperties> = {
  concreto: { background: "var(--surface-card)", border: "1px solid var(--stroke-sutil)" },
  contorno: { background: "transparent", border: "2px solid var(--stroke-media)" },
  roxo: { background: "var(--surface-marca-profunda)", border: "1px solid var(--ts-roxo)" },
  papel: { background: "var(--ts-off-white)", border: "2px solid var(--ts-preto)", color: "var(--ts-preto)" },
};

export function Card({
  variant = "concreto",
  offset = false,
  children,
  style,
}: {
  variant?: Variant;
  offset?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: "var(--raio-card)",
        padding: "var(--esp-6)",
        boxShadow: offset ? (variant === "papel" ? "var(--sombra-dura-marca)" : "var(--sombra-dura-md)") : "none",
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {children}
    </div>
  );
}
