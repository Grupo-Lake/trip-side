import { ReactNode } from "react";

export function Dialog({
  aberto,
  titulo,
  onFechar,
  largura = 480,
  children,
}: {
  aberto: boolean;
  titulo?: string;
  onFechar: () => void;
  largura?: number;
  children?: ReactNode;
}) {
  if (!aberto) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "grid",
        placeItems: "center",
        background: "var(--surface-overlay)",
        backdropFilter: "var(--vidro)",
        padding: "var(--esp-6)",
      }}
      onClick={onFechar}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: largura,
          background: "var(--surface-raised)",
          border: "2px solid var(--stroke-media)",
          borderRadius: "var(--raio-modal)",
          boxShadow: "var(--sombra-modal)",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--esp-4)",
            padding: "var(--esp-5) var(--esp-6)",
            borderBottom: "1px solid var(--stroke-sutil)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-core)",
              fontWeight: "var(--peso-black)" as unknown as number,
              fontSize: "var(--tam-lg)",
              textTransform: "uppercase",
              letterSpacing: "var(--track-display)",
              color: "var(--text-titulo)",
            }}
          >
            {titulo}
          </h3>
          <button
            onClick={onFechar}
            aria-label="Fechar"
            style={{
              width: 32,
              height: 32,
              background: "transparent",
              border: 0,
              color: "var(--text-suave)",
              fontSize: 18,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </header>
        <div style={{ padding: "var(--esp-6)", color: "var(--text-corpo)", font: "var(--type-corpo)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
