const DESTAQUES = [
  { texto: "Fabricação própria no Brasil", href: "#institucional" },
  { texto: "Entrega pra todo o Brasil", href: "#institucional" },
  { texto: "Exclusividade de bairro", href: "#institucional" },
  { texto: "Suporte de marketing", href: "#institucional" },
];

export function Highlights() {
  return (
    <nav
      aria-label="Destaques"
      style={{ background: "var(--ts-preto)", borderBottom: "1px solid var(--stroke-sutil)", overflowX: "auto" }}
    >
      <div
        style={{
          maxWidth: "var(--largura-conteudo)",
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,40px)",
          display: "flex",
          gap: "clamp(24px,5vw,56px)",
          justifyContent: "center",
          whiteSpace: "nowrap",
        }}
      >
        {DESTAQUES.map((d) => (
          <a
            key={d.texto}
            href={d.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--esp-2)",
              height: 56,
              font: "var(--type-label)",
              letterSpacing: "var(--track-label)",
              color: "var(--text-suave)",
              borderBottom: "none",
            }}
          >
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ts-roxo-400)" }} />
            {d.texto}
          </a>
        ))}
      </div>
    </nav>
  );
}
