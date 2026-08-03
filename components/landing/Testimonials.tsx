import { Card } from "@/components/ui/Card";

const DEPOIMENTOS = [
  { texto: "Trip Side vende sozinho na vitrine. Grade nova, cliente novo.", nome: "Marcão", loja: "Concreto Wear", cidade: "São Paulo/SP" },
  { texto: "Suporte responde rápido e resolve. Fechamos reposição em um dia.", nome: "Duda", loja: "Baggy Store", cidade: "Curitiba/PR" },
  { texto: "Exclusividade de bairro que a Trip Side dá é diferencial de verdade.", nome: "Rafa", loja: "Nômade Multimarcas", cidade: "Belo Horizonte/MG" },
];

export function Testimonials() {
  return (
    <section style={{ padding: "clamp(40px,8vw,var(--esp-20)) clamp(20px,5vw,40px)", maxWidth: "var(--largura-conteudo)", margin: "0 auto" }}>
      <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>
        O que os lojistas falam
      </span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--esp-6)", marginTop: "var(--esp-6)" }}>
        {DEPOIMENTOS.map((d) => (
          <Card key={d.nome} variant="concreto">
            <p style={{ fontSize: 16, color: "var(--text-titulo)", margin: "0 0 var(--esp-4)" }}>&ldquo;{d.texto}&rdquo;</p>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>
              {d.nome} · {d.loja} · {d.cidade}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
