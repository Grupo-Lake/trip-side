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
        minHeight: "calc(100vh - 106px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Image
        src="/assets/hero-trilhos.jpg"
        alt="Lojista modelo de costas nos trilhos de ferro, moletom roxo Trip Side com estampa de urso"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", filter: "saturate(.85)" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom,rgba(10,10,10,.55) 0%,rgba(10,10,10,.15) 30%,rgba(10,10,10,.15) 60%,rgba(10,10,10,.92) 100%)",
        }}
      />

      <div style={{ position: "relative", textAlign: "center", padding: "64px 20px 0" }}>
        <h1
          style={{
            fontSize: "clamp(40px,8vw,110px)",
            lineHeight: 0.86,
            letterSpacing: "-.04em",
            color: "var(--ts-off-white)",
          }}
        >
          TRIPSIDE
        </h1>
        <Image
          src="/assets/logos/tripside-logo-2.svg"
          alt="Handstyle Trip Side"
          width={260}
          height={208}
          style={{ width: "clamp(140px,22vw,260px)", height: "auto", margin: "12px auto 0", display: "block", filter: "invert(1)" }}
        />
        <p
          style={{
            font: "var(--type-label)",
            letterSpacing: "var(--track-tag)",
            textTransform: "uppercase",
            color: "var(--ts-off-white)",
            margin: "8px 0 0",
            textShadow: "0 2px 10px rgba(10,10,10,.85)",
          }}
        >
          autêntico até o osso
        </p>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: "var(--largura-conteudo)",
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,40px) clamp(40px,7vw,72px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--esp-5)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "clamp(18px,2.2vw,26px)", lineHeight: 1.15, maxWidth: "30ch", color: "var(--ts-off-white)" }}>
          Venda exclusiva no atacado para lojistas.
        </h2>
        <div style={{ display: "flex", gap: "var(--esp-4)", flexWrap: "wrap", justifyContent: "center" }}>
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
