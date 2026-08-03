import Image from "next/image";
import { logout } from "@/app/area-cliente-direto/actions";
import { Button } from "@/components/ui/Button";

export function AreaHeader({ mostrarLogout }: { mostrarLogout: boolean }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 80,
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
        <a href="/#topo" aria-label="Trip Side, início" style={{ display: "flex", alignItems: "center", gap: "var(--esp-3)", borderBottom: "none" }}>
          <Image src="/assets/logo-mascote-urso.jpg" alt="" width={40} height={40} style={{ width: 40, height: 40, objectFit: "cover" }} />
          <span style={{ fontFamily: "var(--font-tag)", fontSize: 24, color: "var(--ts-off-white)", whiteSpace: "nowrap" }}>Trip Side</span>
        </a>
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "var(--esp-8)" }}>
          <a href="/#topo" style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", borderBottom: "none" }}>Início</a>
          <a href="/#colecao" style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", borderBottom: "none" }}>Coleção Inverno</a>
          <a href="/#revendedores" style={{ font: "var(--type-label)", letterSpacing: "var(--track-tag)", borderBottom: "none" }}>Revendedores</a>
        </div>
        {mostrarLogout && (
          <form action={logout}>
            <Button variant="contorno" size="sm">Sair</Button>
          </form>
        )}
      </div>
    </header>
  );
}
