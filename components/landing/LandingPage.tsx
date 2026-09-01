"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { Collection } from "@/components/landing/Collection";
import { Institutional } from "@/components/landing/Institutional";
import { Footer } from "@/components/landing/Footer";
import { InstitutionalProvider } from "@/components/landing/InstitutionalContext";

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <InstitutionalProvider>
      <div style={{ background: "var(--ts-preto)", minHeight: "100vh" }}>
        <a
          href="#conteudo"
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
            background: "var(--ts-off-white)",
            color: "var(--ts-preto)",
            padding: "10px 16px",
            font: "var(--type-label)",
            zIndex: 200,
          }}
        >
          Pular para o conteúdo
        </a>

        <Header
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((v) => !v)}
          onCloseMobileMenu={() => setMobileMenuOpen(false)}
        />

        <main id="conteudo" style={{ paddingTop: 106 }}>
          <Hero />
          <Highlights />
          <Collection />
          <Institutional />
        </main>

        <Footer />
      </div>
    </InstitutionalProvider>
  );
}
