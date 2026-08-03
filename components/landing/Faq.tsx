import { Accordion } from "@/components/landing/Accordion";

const FAQS = [
  { titulo: "Tem pedido mínimo?", texto: "Sim, a grade fechada mínima é definida por drop. A gente confirma no cadastro." },
  { titulo: "Qual o prazo de entrega?", texto: "De 5 a 12 dias úteis pra todo o Brasil, direto da fábrica." },
  { titulo: "Existe exclusividade territorial?", texto: "Pra loja física cadastrada, sim — a gente prioriza um raio por cidade." },
  { titulo: "Como funciona o pagamento?", texto: "Boleto 30/60 pra lojista recorrente. Primeiro pedido é à vista." },
  { titulo: "Multimarcas de fora de SP pode revender?", texto: "Pode. Atendemos lojista de todo o Brasil, física e online." },
];

export function Faq() {
  return (
    <section style={{ padding: "0 clamp(20px,5vw,40px) clamp(48px,10vw,var(--esp-24))", maxWidth: 820, margin: "0 auto" }}>
      <h2 style={{ fontSize: 32, marginBottom: "var(--esp-8)" }}>Perguntas de quem vai revender</h2>
      <Accordion items={FAQS} />
    </section>
  );
}
