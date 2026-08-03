import { CSSProperties, ReactNode } from "react";

type Tom = "vermelho" | "roxo" | "branco" | "ouro" | "preto";

const TONS: Record<Tom, CSSProperties> = {
  vermelho: { background: "var(--ts-vermelho)", color: "var(--ts-off-white)" },
  roxo: { background: "var(--ts-roxo)", color: "var(--ts-off-white)" },
  branco: { background: "var(--ts-off-white)", color: "var(--ts-preto)" },
  ouro: { background: "var(--ts-ouro)", color: "var(--ts-preto)" },
  preto: { background: "var(--ts-preto)", color: "var(--ts-off-white)" },
};

export function Badge({ tom = "vermelho", children }: { tom?: Tom; children?: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 20,
        padding: "0 7px",
        fontFamily: "var(--font-core)",
        fontWeight: "var(--peso-black)" as unknown as number,
        fontSize: "var(--tam-3xs)",
        letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        ...TONS[tom],
      }}
    >
      {children}
    </span>
  );
}
