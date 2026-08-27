"use client";

import { useState } from "react";

export interface AccordionItem {
  id?: string;
  titulo: string;
  texto: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, i) => {
        const aberto = openIndex === i;
        return (
          <div key={item.titulo} id={item.id} style={{ borderBottom: "1px solid var(--stroke-sutil)", scrollMarginTop: 130 }}>
            <button
              onClick={() => setOpenIndex(aberto ? null : i)}
              aria-expanded={aberto}
              style={{
                all: "unset",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "var(--esp-5) 0",
                cursor: "pointer",
                gap: "var(--esp-4)",
              }}
            >
              <span style={{ fontSize: 17, fontWeight: "var(--peso-bold)" as unknown as number, color: "var(--text-titulo)" }}>
                {item.titulo}
              </span>
              <span aria-hidden="true" style={{ font: "var(--type-mono)", color: "var(--ts-roxo-400)", flexShrink: 0 }}>
                {aberto ? "−" : "+"}
              </span>
            </button>
            {aberto && (
              <p style={{ color: "var(--text-corpo)", padding: "0 0 var(--esp-5)", margin: 0, maxWidth: "64ch", whiteSpace: "pre-line" }}>{item.texto}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
