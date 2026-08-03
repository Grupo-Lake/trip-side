import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export function Hero({ onAbrirDialog }: { onAbrirDialog: () => void }) {
  return (
    <section
      id="topo"
      style={{
        position: "relative",
        minHeight: "clamp(520px,90vh,760px)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/hero-trilhos.jpg"
        alt="Lojista modelo de costas nos trilhos de ferro, moletom roxo Trip Side com estampa de urso"
        fill
        priority
        style={{ objectFit: "cover", filter: "saturate(.92)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "var(--protecao-baixo)" }} />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--largura-conteudo)",
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,40px) clamp(48px,10vw,var(--esp-24))",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--esp-5)",
        }}
      >
        <Tag tom="ouro">Programa de Revendedores</Tag>
        <h1 style={{ fontSize: "clamp(36px,6vw,88px)", maxWidth: "16ch", color: "var(--ts-off-white)" }}>
          Bem-vindo à indústria: domine o lado urbano.
        </h1>
        <p style={{ font: "var(--type-corpo)", color: "var(--text-corpo)", maxWidth: "56ch", fontSize: 18 }}>
          Seja um Revendedor Autorizado da Trip Side. Exclusividade de território e a Coleção Inverno 2k26 direto de
          fábrica, sem intermediário.
        </p>
        <div style={{ display: "flex", gap: "var(--esp-4)", flexWrap: "wrap", marginTop: "var(--esp-3)" }}>
          <Button variant="roxo" size="lg" onClick={onAbrirDialog}>
            Cadastre-se como Revendedor
          </Button>
          <Button as="a" href="#colecao" variant="contorno" size="lg">
            Ver Coleção
          </Button>
        </div>
      </div>
    </section>
  );
}
