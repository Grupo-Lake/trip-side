import { CSSProperties, ReactNode } from "react";

type Tom = "neutro" | "marca" | "ouro" | "invertido";

const TONS: Record<Tom, CSSProperties> = {
  neutro: { color: "var(--text-suave)", borderColor: "var(--stroke-media)" },
  marca: { color: "var(--ts-roxo-400)", borderColor: "var(--ts-roxo)" },
  ouro: { color: "var(--ts-ouro)", borderColor: "var(--ts-ouro)" },
  invertido: { color: "var(--ts-preto)", borderColor: "var(--ts-preto)" },
};

export function Tag({
  tom = "neutro",
  children,
  style,
}: {
  tom?: Tom;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 22,
        padding: "0 8px",
        font: "var(--type-label)",
        letterSpacing: "var(--track-tag)",
        textTransform: "uppercase",
        border: "1px solid",
        borderRadius: "var(--raio-0)",
        ...TONS[tom],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
