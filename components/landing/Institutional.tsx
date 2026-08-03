import { Accordion } from "@/components/landing/Accordion";

const INSTITUCIONAL = [
  { id: "sobre", titulo: "Sobre a Trip Side", texto: "Fabricação própria no Brasil. Streetwear direto da fábrica pro lojista, sem atravessador." },
  { id: "trabalhe-conosco", titulo: "Trabalhe Conosco", texto: "Time cresce todo drop. Manda teu portfólio pro nosso WhatsApp comercial." },
  { id: "trocas", titulo: "Política de Trocas", texto: "Troca em até 7 dias corridos pra peça com defeito de fabricação, sem uso e com etiqueta." },
  { id: "termos", titulo: "Termos de Uso", texto: "Ao cadastrar tua loja, você confirma CNPJ ativo e concorda com as condições comerciais de lojista Trip Side." },
];

export function Institutional() {
  return (
    <section id="institucional" style={{ padding: "0 clamp(20px,5vw,40px) clamp(48px,10vw,var(--esp-24))", maxWidth: 820, margin: "0 auto" }}>
      <h2 style={{ fontSize: 32, marginBottom: "var(--esp-8)" }}>Institucional</h2>
      <Accordion items={INSTITUCIONAL} />
    </section>
  );
}
