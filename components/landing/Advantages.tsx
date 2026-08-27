import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

const VANTAGENS = [
  { numero: "01", titulo: "Entrega Rápida", texto: "Produção própria no Brasil. A grade sai da fábrica pro teu estoque sem intermediário." },
  { numero: "02", titulo: "Margem de Lucro", texto: "Preço de fábrica direto pro lojista. Margem que sobra de verdade, não migalha." },
  { numero: "03", titulo: "Suporte de Marketing", texto: "Arte de drop e still de produto pra tua loja divulgar sem gastar com estúdio." },
];

const WPP_REVENDEDOR = "https://wa.me/5511912252298?text=" + encodeURIComponent("Quero ser revendedor TripSide");

export function Advantages() {
  return (
    <section
      id="revendedores"
      style={{ padding: "clamp(48px,10vw,var(--esp-24)) clamp(20px,5vw,40px)", background: "var(--surface-marca-profunda)" }}
    >
      <div style={{ maxWidth: "var(--largura-conteudo)", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Tag tom="ouro">Vantagens Exclusivas para Parceiros</Tag>
        <h2 style={{ fontSize: 40, marginTop: "var(--esp-4)", maxWidth: "18ch" }}>O seu negócio no próximo nível.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--esp-8)", marginTop: "var(--esp-12)" }}>
          {VANTAGENS.map((v) => (
            <div key={v.numero} style={{ borderTop: "2px solid var(--ts-roxo-400)", paddingTop: "var(--esp-4)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--esp-3)" }}>
              <span style={{ font: "var(--type-mono)", fontSize: 32, color: "var(--ts-roxo-400)" }}>{v.numero}</span>
              <h3 style={{ fontSize: 18, textTransform: "uppercase", letterSpacing: "var(--track-label)" }}>{v.titulo}</h3>
              <p style={{ fontSize: 15, color: "var(--text-corpo)", margin: 0 }}>{v.texto}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "var(--esp-12)" }}>
          <Button as="a" href={WPP_REVENDEDOR} target="_blank" rel="noopener noreferrer" variant="branco" size="lg">
            Cadastre-se como Revendedor
          </Button>
        </div>
      </div>
    </section>
  );
}
