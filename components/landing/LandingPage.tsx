"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Collection } from "@/components/landing/Collection";
import { Advantages } from "@/components/landing/Advantages";
import { Testimonials } from "@/components/landing/Testimonials";
import { Institutional } from "@/components/landing/Institutional";
import { Footer } from "@/components/landing/Footer";

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
        <Collection />
        <Advantages />
        <Testimonials />
        <Institutional />
      </main>

      <Footer />
    </div>
  );
}
