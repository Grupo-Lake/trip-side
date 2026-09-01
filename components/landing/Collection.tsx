import Image from "next/image";
import { TagHeading } from "@/components/ui/TagHeading";
import { Badge } from "@/components/ui/Badge";

const WPP_ONDE_COMPRAR = "https://wa.me/5511912252298?text=" + encodeURIComponent("Quero saber onde comprar TripSide");

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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 2, background: "var(--stroke-sutil)" }}>
        {PRODUTOS.map((produto) => (
          <div key={produto.nome} style={{ position: "relative", overflow: "hidden", background: "var(--ts-cinza-900)", aspectRatio: "4/5", display: "flex", flexDirection: "column" }}>
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              sizes="(min-width: 900px) 25vw, (min-width: 500px) 33vw, 50vw"
              style={{ objectFit: "cover", filter: "saturate(.92)" }}
            />
            {produto.selo && (
              <div style={{ position: "absolute", top: 12, left: 12, zIndex: 1 }}>
                <Badge tom={produto.selo.tom}>{produto.selo.texto}</Badge>
              </div>
            )}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                marginTop: "auto",
                padding: 14,
                background: "linear-gradient(to top,rgba(10,10,10,.88),rgba(10,10,10,0))",
              }}
            >
              <span style={{ display: "block", font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--ts-off-white)", opacity: 0.7 }}>
                {produto.modelagem}
              </span>
              <h3 style={{ fontSize: 14, margin: "2px 0 0", color: "var(--ts-off-white)" }}>{produto.nome}</h3>
            </div>
          </div>
        ))}
        <a
          href={WPP_ONDE_COMPRAR}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            background: "var(--ts-roxo-900)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            textDecoration: "none",
            borderBottom: "none",
          }}
        >
          <TagHeading as="span" tamanho={32} rotacao={-2} style={{ margin: 0 }}>
            Ver tudo
          </TagHeading>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", color: "var(--ts-roxo-400)" }}>
            Coleção completa →
          </span>
        </a>
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
          <Image
            src="/assets/logos/tripside-logo-2.svg"
            alt=""
            width={96}
            height={77}
            style={{ position: "absolute", right: 20, bottom: 16, width: 96, height: "auto", filter: "invert(1)", opacity: 0.9 }}
          />
          <span style={{ position: "absolute", left: "var(--esp-5)", bottom: "var(--esp-5)", font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--ts-off-white)" }}>
            Handstyle bordado · Drop 07
          </span>
        </div>
      </div>
    </section>
  );
}
