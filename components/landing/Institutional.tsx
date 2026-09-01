"use client";

import { useInstitutional } from "@/components/landing/InstitutionalContext";

export function Institutional() {
  const { items, activeIndex, selectItem } = useInstitutional();
  const activeItem = items[activeIndex];

  return (
    <section
      id="institucional"
      style={{ padding: "clamp(48px,10vw,var(--esp-24)) clamp(20px,5vw,40px)", maxWidth: "var(--largura-conteudo)", margin: "0 auto" }}
    >
      <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>A empresa</span>
      <h2 style={{ margin: "8px 0 0", fontSize: 36 }}>Institucional</h2>

      <div className="ts-inst-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "var(--esp-10)", marginTop: "var(--esp-10)", alignItems: "start" }}>
        <div className="ts-inst-nav" style={{ display: "flex", flexDirection: "column", gap: 4, position: "sticky", top: 130 }}>
          {items.map((item, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={item.titulo}
                onClick={() => selectItem(i)}
                aria-current={active}
                style={{
                  all: "unset",
                  boxSizing: "border-box",
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 16px",
                  font: "var(--type-label)",
                  letterSpacing: "var(--track-label)",
                  cursor: "pointer",
                  borderLeft: `2px solid ${active ? "var(--ts-roxo)" : "transparent"}`,
                  background: active ? "var(--surface-marca-profunda)" : "transparent",
                  color: active ? "var(--ts-off-white)" : "var(--text-suave)",
                  transition:
                    "background var(--dur-rapido) var(--ease-padrao),color var(--dur-rapido) var(--ease-padrao),border-color var(--dur-rapido) var(--ease-padrao)",
                }}
              >
                {item.titulo}
              </button>
            );
          })}
        </div>

        <div style={{ background: "var(--surface-card)", border: "1px solid var(--stroke-sutil)", padding: "var(--esp-10)", minHeight: 280 }}>
          <span style={{ font: "var(--type-mono)", color: "var(--ts-roxo-400)" }}>{activeItem.numero}</span>
          <h3 style={{ margin: "8px 0 20px", fontSize: 26 }}>{activeItem.titulo}</h3>
          <p style={{ color: "var(--text-corpo)", margin: 0, maxWidth: "64ch", whiteSpace: "pre-line", fontSize: 16, lineHeight: 1.7 }}>
            {activeItem.texto}
          </p>
        </div>
      </div>
    </section>
  );
}
