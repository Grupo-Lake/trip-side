import type { Metadata } from "next";
import { Permanent_Marker, Pirata_One, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trip Side Indústria — Seja Revendedor Autorizado | Coleção Inverno 2k26",
  description:
    "Cadastre sua loja como revendedor autorizado Trip Side. Grade fechada, margem de lojista e a Coleção Inverno 2k26 direto de fábrica.",
  openGraph: {
    title: "Trip Side Indústria — Seja Revendedor Autorizado",
    description:
      "Exclusividade, margem de lojista e suporte de marketing. Coleção Inverno 2k26 no ar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${permanentMarker.variable} ${pirataOne.variable} ${archivo.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
