"use client";

import Image from "next/image";
import { useInstitutional } from "@/components/landing/InstitutionalContext";

export function Footer() {
  const { items, selectItem } = useInstitutional();

  return (
    <footer
      id="contato"
      style={{
        background: "var(--ts-preto)",
        borderTop: "2px solid var(--stroke-sutil)",
        padding: "clamp(40px,8vw,var(--esp-16)) clamp(20px,5vw,40px) var(--esp-8)",
      }}
    >
      <div style={{ maxWidth: "var(--largura-conteudo)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--esp-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-4)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "var(--esp-3)" }}>
            <Image
              src="/assets/logos/tripside-logo-4.svg"
              alt="Monograma Trip Side"
              width={36}
              height={36}
              style={{ width: 36, height: 36, objectFit: "contain", filter: "invert(1)" }}
            />
            <span style={{ fontFamily: "var(--font-tag)", fontSize: 22, color: "var(--ts-off-white)" }}>Trip Side</span>
          </span>
          <p style={{ color: "var(--text-suave)", maxWidth: "36ch", fontSize: 14 }}>
            Streetwear de fabricação própria no Brasil. Drop toda semana, direto da indústria pro lojista.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-3)" }}>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>Navegação</span>
          <a href="#topo" style={{ borderBottom: "none", fontSize: 14 }}>Início</a>
          <a href="#colecao" style={{ borderBottom: "none", fontSize: 14 }}>Coleção Inverno</a>
          <a href="#institucional" style={{ borderBottom: "none", fontSize: 14 }}>Institucional</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-3)" }}>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>Institucional</span>
          {items.map((item, i) => (
            <button
              key={item.titulo}
              onClick={() => selectItem(i)}
              style={{
                all: "unset",
                boxSizing: "border-box",
                borderBottom: "none",
                fontSize: 14,
                color: "var(--ts-off-white)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {item.titulo}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-3)" }}>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--text-suave)" }}>Atendimento</span>
          <a href="https://wa.me/5511912252298" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none", fontSize: 14 }}>WhatsApp Comercial</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none", fontSize: 14 }}>Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none", fontSize: 14 }}>TikTok</a>
        </div>
      </div>
      <div style={{ maxWidth: "var(--largura-conteudo)", margin: "56px auto 0", textAlign: "center" }}>
        <Image
          src="/assets/logos/tripside-logo-3.svg"
          alt="Autêntico até o osso — Trip Side"
          width={900}
          height={720}
          style={{ width: "min(90%,900px)", height: "auto", margin: "0 auto", display: "block", filter: "invert(1)", opacity: 0.9 }}
        />
      </div>
      <div
        style={{
          maxWidth: "var(--largura-conteudo)",
          margin: "var(--esp-6) auto 0",
          paddingTop: "var(--esp-6)",
          borderTop: "1px solid var(--stroke-sutil)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--esp-3)",
        }}
      >
        <span style={{ font: "var(--type-mono)", color: "var(--text-desabilitado)" }}>© 2026 Trip Side Indústria. Todos os direitos reservados.</span>
        <span style={{ font: "var(--type-mono)", color: "var(--text-desabilitado)" }}>CNPJ 00.000.000/0001-00</span>
      </div>
    </footer>
  );
}
