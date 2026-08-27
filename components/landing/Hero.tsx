import Image from "next/image";
import { Button } from "@/components/ui/Button";

const WPP_REVENDEDOR = "https://wa.me/5511912252298?text=" + encodeURIComponent("Quero ser revendedor TripSide");
const WPP_ONDE_COMPRAR = "https://wa.me/5511912252298?text=" + encodeURIComponent("Quero saber onde comprar TripSide");

export function Hero() {
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
        <div>
          <h1 style={{ fontSize: "clamp(36px,6vw,88px)", color: "var(--ts-off-white)" }}>TRIPSIDE</h1>
          <p
            style={{
              font: "var(--type-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color: "var(--ts-roxo-400)",
              margin: "var(--esp-1) 0 0",
            }}
          >
            autêntico até o osso
          </p>
        </div>

        <h2 style={{ fontSize: "clamp(20px,2.6vw,30px)", maxWidth: "24ch", color: "var(--ts-off-white)" }}>
          VENDA EXCLUSIVA NO ATACADO PARA LOJISTAS.
        </h2>
        <p style={{ font: "var(--type-corpo)", color: "var(--text-corpo)", maxWidth: "56ch", fontSize: 18 }}>
          Quer comprar TripSide para uso próprio? Encontre onde comprar.
        </p>

        <div style={{ display: "flex", gap: "var(--esp-4)", flexWrap: "wrap", marginTop: "var(--esp-3)" }}>
          <Button as="a" href={WPP_REVENDEDOR} target="_blank" rel="noopener noreferrer" variant="roxo" size="lg">
            Quero ser revendedor
          </Button>
          <Button as="a" href={WPP_ONDE_COMPRAR} target="_blank" rel="noopener noreferrer" variant="contorno" size="lg">
            Onde comprar
          </Button>
        </div>
      </div>
    </section>
  );
}
