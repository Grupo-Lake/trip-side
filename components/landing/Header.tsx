"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";

const TICKER_ITENS = [
  "Drop Inverno 2k26 no ar",
  "Fabricação própria no Brasil",
  "Entrega pra todo o Brasil",
  "Venda direta e multimarcas",
];

const NAV_LINKS = [
  { href: "#topo", label: "Início" },
  { href: "#colecao", label: "Coleção Inverno" },
  { href: "#revendedores", label: "Revendedores" },
  { href: "#institucional", label: "Institucional" },
  { href: "#contato", label: "Contato" },
];

export function Header({
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onAbrirDialog,
}: {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  onAbrirDialog: () => void;
}) {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 80 }}>
      <Marquee itens={TICKER_ITENS} />
      <nav
        aria-label="Navegação principal"
        style={{
          height: 72,
          background: "rgba(10,10,10,.92)",
          backdropFilter: "var(--vidro)",
          borderBottom: "1px solid var(--stroke-sutil)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "var(--largura-conteudo)",
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--esp-6)",
          }}
        >
          <a
            href="#topo"
            aria-label="Trip Side, início"
            style={{ display: "flex", alignItems: "center", gap: "var(--esp-3)", borderBottom: "none", flexShrink: 0 }}
          >
            <Image
              src="/assets/logo-mascote-urso.jpg"
              alt=""
              width={40}
              height={40}
              style={{ width: 40, height: 40, objectFit: "cover", flexShrink: 0 }}
            />
            <span style={{ fontFamily: "var(--font-tag)", fontSize: 24, color: "var(--ts-off-white)", whiteSpace: "nowrap" }}>
              Trip Side
            </span>
          </a>

          {/* Mobile toggle */}
          <div className="md:hidden">
          <button
            onClick={onToggleMobileMenu}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            style={{
              all: "unset",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 5,
              width: 44,
              height: 44,
              cursor: "pointer",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--ts-off-white)",
                transition: "all var(--dur-rapido) var(--ease-padrao)",
                transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--ts-off-white)",
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "opacity var(--dur-rapido) var(--ease-padrao)",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "var(--ts-off-white)",
                transition: "all var(--dur-rapido) var(--ease-padrao)",
                transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "var(--esp-8)", flex: 1, justifyContent: "center" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", borderBottom: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <Button variant="roxo" size="sm" onClick={onAbrirDialog}>
              Seja Revendedor
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: 106,
            left: 0,
            right: 0,
            background: "var(--ts-preto)",
            borderBottom: "2px solid var(--ts-roxo)",
            padding: "var(--esp-6) clamp(20px,5vw,40px)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--esp-1)",
            boxShadow: "0 12px 24px rgba(0,0,0,.4)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onCloseMobileMenu}
              style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", borderBottom: "none", padding: "var(--esp-3) 0" }}
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="roxo"
            size="md"
            block
            onClick={() => {
              onCloseMobileMenu();
              onAbrirDialog();
            }}
          >
            Seja Revendedor
          </Button>
        </div>
      )}
    </header>
  );
}
