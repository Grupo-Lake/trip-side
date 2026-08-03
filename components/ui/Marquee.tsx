export function Marquee({
  itens,
  velocidade = 26,
  separador = "✦",
}: {
  itens: string[];
  velocidade?: number;
  separador?: string;
}) {
  const fila = [...itens, ...itens];
  return (
    <div
      style={{
        overflow: "hidden",
        background: "var(--ts-roxo)",
        height: "var(--altura-ticker)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          animation: `ts-marquee ${velocidade}s linear infinite`,
          willChange: "transform",
        }}
      >
        {fila.map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--esp-4)",
              padding: "0 var(--esp-4)",
              whiteSpace: "nowrap",
              color: "var(--ts-off-white)",
              fontFamily: "var(--font-core)",
              fontWeight: "var(--peso-black)" as unknown as number,
              fontSize: "var(--tam-3xs)",
              letterSpacing: "var(--track-tag)",
              textTransform: "uppercase",
            }}
          >
            {t}
            <span style={{ opacity: 0.6 }}>{separador}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
