"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Collection } from "@/components/landing/Collection";
import { Advantages } from "@/components/landing/Advantages";
import { Testimonials } from "@/components/landing/Testimonials";
import { FindStore } from "@/components/landing/FindStore";
import { Faq } from "@/components/landing/Faq";
import { Institutional } from "@/components/landing/Institutional";
import { Footer } from "@/components/landing/Footer";
import { SignupDialog } from "@/components/landing/SignupDialog";

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogAberto, setDialogAberto] = useState(false);

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
        onAbrirDialog={() => setDialogAberto(true)}
      />

      <main id="conteudo" style={{ paddingTop: 106 }}>
        <Hero onAbrirDialog={() => setDialogAberto(true)} />
        <Collection />
        <Advantages onAbrirDialog={() => setDialogAberto(true)} />
        <Testimonials />
        <FindStore />
        <Faq />
        <Institutional />
      </main>

      <Footer />

      <SignupDialog aberto={dialogAberto} onFechar={() => setDialogAberto(false)} />
    </div>
  );
}
