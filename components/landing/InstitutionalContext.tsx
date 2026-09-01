"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface InstitutionalItem {
  numero: string;
  titulo: string;
  texto: string;
}

export const INSTITUCIONAL: InstitutionalItem[] = [
  { numero: "01", titulo: "Sobre a Trip Side", texto: "Fabricação própria no Brasil. Streetwear direto da fábrica pro lojista, sem atravessador." },
  { numero: "02", titulo: "Missão", texto: "Fortalecer o lojista e a cultura de rua com streetwear autêntico, qualidade e preço justo — sem transformar estilo em luxo." },
  { numero: "03", titulo: "Visão", texto: "Ser referência no streetwear nacional, crescendo junto com nossos revendedores e fortalecendo a cultura de rua em todo o Brasil." },
  {
    numero: "04",
    titulo: "Valores",
    texto:
      "• Fortalecer o lojista — não competir com quem vende TripSide. Crescer junto com nossos revendedores.\n" +
      "• Estilo sem luxo — vestir as ruas com produtos de qualidade e preço justo, sem elitizar o streetwear.\n" +
      "• Cultura de rua — apoiar artistas independentes, batalhas de rima, skate, música, arte e tudo que nasce e cresce nas ruas.\n" +
      "• Liberdade de ser — valorizar a autenticidade e a liberdade de cada pessoa ser quem é e se expressar sem rótulos ou preconceitos.\n" +
      "• Evolução constante — melhorar sempre, buscando novas ideias, criando novos produtos e ouvindo quem cresce com a gente: nossos revendedores.",
  },
  { numero: "05", titulo: "Trabalhe Conosco", texto: "Time cresce todo drop. Manda teu portfólio pro nosso WhatsApp comercial." },
  { numero: "06", titulo: "Política de Trocas", texto: "Troca em até 7 dias corridos pra peça com defeito de fabricação, sem uso e com etiqueta." },
  { numero: "07", titulo: "Termos de Uso", texto: "Ao cadastrar tua loja, você confirma CNPJ ativo e concorda com as condições comerciais de lojista Trip Side." },
];

interface InstitutionalContextValue {
  items: InstitutionalItem[];
  activeIndex: number;
  selectItem: (index: number) => void;
}

const InstitutionalContext = createContext<InstitutionalContextValue | null>(null);

export function InstitutionalProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectItem = (index: number) => {
    setActiveIndex(index);
    document.getElementById("institucional")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <InstitutionalContext.Provider value={{ items: INSTITUCIONAL, activeIndex, selectItem }}>
      {children}
    </InstitutionalContext.Provider>
  );
}

export function useInstitutional() {
  const ctx = useContext(InstitutionalContext);
  if (!ctx) throw new Error("useInstitutional must be used within InstitutionalProvider");
  return ctx;
}
