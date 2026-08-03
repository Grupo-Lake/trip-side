import type { Metadata } from "next";
import { hasClienteSession } from "@/lib/auth";
import { AreaHeader } from "@/components/area-cliente-direto/AreaHeader";
import { LoginForm } from "@/components/area-cliente-direto/LoginForm";
import { Directory, type DirectoryFilters } from "@/components/area-cliente-direto/Directory";
import type { SortKey } from "@/lib/resellers";

// Keep this directory out of search results — one more small deterrent against
// automated discovery/scraping of the (already login-gated) reseller list.
export const metadata: Metadata = {
  title: "Área do Cliente Direto | Trip Side",
  robots: { index: false, follow: false },
};

const SORT_VALUES: SortKey[] = ["relevancia", "localidade", "frete"];

function readParam(value: string | string[] | undefined, fallback: string) {
  if (typeof value !== "string" || value.length === 0) return fallback;
  return value;
}

export default async function AreaClienteDiretoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const autenticado = await hasClienteSession();

  if (!autenticado) {
    return (
      <div style={{ background: "var(--ts-preto)", minHeight: "100vh" }}>
        <AreaHeader mostrarLogout={false} />
        <main style={{ padding: "clamp(48px,10vw,var(--esp-24)) clamp(20px,5vw,40px)" }}>
          <LoginForm />
        </main>
      </div>
    );
  }

  const sp = await searchParams;
  const sortParam = readParam(sp.sort, "relevancia");
  const filters: DirectoryFilters = {
    estado: readParam(sp.estado, "todos"),
    cidade: readParam(sp.cidade, "todas"),
    tipo: readParam(sp.tipo, "todos"),
    frete: readParam(sp.frete, "todos"),
    produto: readParam(sp.produto, "todos"),
    sort: SORT_VALUES.includes(sortParam as SortKey) ? (sortParam as SortKey) : "relevancia",
    page: Number(readParam(sp.page, "1")) || 1,
  };

  return (
    <div style={{ background: "var(--ts-preto)", minHeight: "100vh" }}>
      <AreaHeader mostrarLogout />
      <main style={{ padding: "clamp(40px,8vw,var(--esp-16)) clamp(20px,5vw,40px) clamp(48px,10vw,var(--esp-24))" }}>
        <Directory filters={filters} />
      </main>
      <footer style={{ background: "var(--ts-preto)", borderTop: "2px solid var(--stroke-sutil)", padding: "clamp(20px,5vw,40px)" }}>
        <div style={{ maxWidth: "var(--largura-conteudo)", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--esp-3)" }}>
          <span style={{ font: "var(--type-mono)", color: "var(--text-desabilitado)" }}>© 2026 Trip Side Indústria. Todos os direitos reservados.</span>
          <a href="/#topo" style={{ borderBottom: "none", font: "var(--type-mono)", color: "var(--text-suave)" }}>← Voltar pro site</a>
        </div>
      </footer>
    </div>
  );
}
