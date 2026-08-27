import { Accordion } from "@/components/landing/Accordion";

const INSTITUCIONAL = [
  { id: "sobre", titulo: "Sobre a Trip Side", texto: "Fabricação própria no Brasil. Streetwear direto da fábrica pro lojista, sem atravessador." },
  { id: "missao", titulo: "Missão", texto: "Fortalecer o lojista e a cultura de rua com streetwear autêntico, qualidade e preço justo — sem transformar estilo em luxo." },
  { id: "visao", titulo: "Visão", texto: "Ser referência no streetwear nacional, crescendo junto com nossos revendedores e fortalecendo a cultura de rua em todo o Brasil." },
  {
    id: "valores",
    titulo: "Valores",
    texto:
      "• Fortalecer o lojista — não competir com quem vende TripSide. Crescer junto com nossos revendedores.\n" +
      "• Estilo sem luxo — vestir as ruas com produtos de qualidade e preço justo, sem elitizar o streetwear.\n" +
      "• Cultura de rua — apoiar artistas independentes, batalhas de rima, skate, música, arte e tudo que nasce e cresce nas ruas.\n" +
      "• Liberdade de ser — valorizar a autenticidade e a liberdade de cada pessoa ser quem é e se expressar sem rótulos ou preconceitos.\n" +
      "• Evolução constante — melhorar sempre, buscando novas ideias, criando novos produtos e ouvindo quem cresce com a gente: nossos revendedores.",
  },
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
