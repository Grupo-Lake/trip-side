import Image from "next/image";
import { TagHeading } from "@/components/ui/TagHeading";
import { Badge } from "@/components/ui/Badge";

const PRODUTOS = [
  {
    imagem: "/assets/produto-roxo-frontal.jpg",
    nome: "Moletom Wordmark Roxo",
    modelagem: "Oversized",
    selo: { tom: "roxo" as const, texto: "Novo" },
  },
  {
    imagem: "/assets/produto-roxo-costas-urso.jpg",
    nome: "Moletom Urso Cash Costas",
    modelagem: "Oversized",
    selo: { tom: "vermelho" as const, texto: "Esgota Rápido" },
  },
  {
    imagem: "/assets/produto-branco-frontal.jpg",
    nome: "Moletom Lockup Off-White",
    modelagem: "Boxy",
    selo: null,
  },
  {
    imagem: "/assets/produto-branco-costas.jpg",
    nome: "Moletom Payaso Costas",
    modelagem: "Boxy",
    selo: { tom: "ouro" as const, texto: "Drop 07" },
  },
];

export function Collection() {
  return (
    <section
      id="colecao"
      style={{ padding: "clamp(48px,10vw,var(--esp-24)) clamp(20px,5vw,40px)", maxWidth: "var(--largura-conteudo)", margin: "0 auto" }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--esp-5)", flexWrap: "wrap", marginBottom: "var(--esp-10)" }}>
        <TagHeading tamanho={40}>Inverno 2k26</TagHeading>
        <h2 style={{ fontSize: 36 }}>Última coleção</h2>
      </div>

      <div style={{ display: "flex", gap: "var(--esp-6)", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "var(--esp-4)" }}>
        {PRODUTOS.map((produto) => (
          <div key={produto.nome} style={{ flex: "0 0 260px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "var(--esp-3)" }}>
            <div style={{ position: "relative", overflow: "hidden", background: "var(--ts-cinza-900)", aspectRatio: "4/5" }}>
              <Image src={produto.imagem} alt={produto.nome} fill sizes="260px" style={{ objectFit: "cover", filter: "saturate(.92)" }} />
              {produto.selo && (
                <div style={{ position: "absolute", top: 10, left: 10 }}>
                  <Badge tom={produto.selo.tom}>{produto.selo.texto}</Badge>
                </div>
              )}
            </div>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>
              {produto.modelagem}
            </span>
            <h3 style={{ fontSize: 14, margin: 0, color: "var(--text-titulo)" }}>{produto.nome}</h3>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "var(--esp-8)",
          marginTop: "var(--esp-16)",
          alignItems: "stretch",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", background: "var(--ts-cinza-900)", aspectRatio: "16/10" }}>
          <Image
            src="/assets/lifestyle-trilhos.jpg"
            alt="Modelo em movimento nos trilhos, moletom roxo Trip Side"
            fill
            sizes="(min-width: 700px) 50vw, 100vw"
            style={{ objectFit: "cover", filter: "saturate(.92)", animation: "ts-crossfade 6s ease-in-out infinite" }}
          />
          <Image
            src="/assets/produto-roxo-frontal.jpg"
            alt="Modelo parada nos trilhos segurando o capuz do moletom Trip Side"
            fill
            sizes="(min-width: 700px) 50vw, 100vw"
            style={{ objectFit: "cover", filter: "saturate(.92)", animation: "ts-crossfade-rev 6s ease-in-out infinite" }}
          />
          <div style={{ position: "absolute", left: "var(--esp-5)", bottom: "var(--esp-5)", display: "flex", alignItems: "center", gap: "var(--esp-2)" }}>
            <span
              aria-hidden="true"
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(10,10,10,.7)",
                border: "2px solid var(--ts-off-white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ts-off-white)",
                fontSize: 12,
              }}
            >
              ▶
            </span>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--ts-off-white)", textShadow: "0 1px 4px rgba(0,0,0,.6)" }}>
              Prévia do editorial
            </span>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "var(--ts-cinza-900)", aspectRatio: "16/10" }}>
          <Image
            src="/assets/detalhe-logo-close.jpg"
            alt="Close-up do handstyle Trip Side bordado no peito do moletom"
            fill
            sizes="(min-width: 700px) 50vw, 100vw"
            style={{ objectFit: "cover", filter: "saturate(.92)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "var(--protecao-baixo)" }} />
          <span style={{ position: "absolute", left: "var(--esp-5)", bottom: "var(--esp-5)", font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--ts-off-white)" }}>
            Handstyle bordado · Drop 07
          </span>
        </div>
      </div>
    </section>
  );
}
