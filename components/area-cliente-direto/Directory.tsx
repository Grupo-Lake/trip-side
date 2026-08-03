import { Badge } from "@/components/ui/Badge";
import { FiltersForm } from "@/components/area-cliente-direto/FiltersForm";
import { Pagination } from "@/components/area-cliente-direto/Pagination";
import { ResellerCard } from "@/components/area-cliente-direto/ResellerCard";
import { getCidadeOptions, getEstadoOptions, getTotalResellerCount, queryResellers, type SortKey } from "@/lib/resellers";

export interface DirectoryFilters {
  estado: string;
  cidade: string;
  tipo: string;
  frete: string;
  produto: string;
  sort: SortKey;
  page: number;
}

export function Directory({ filters }: { filters: DirectoryFilters }) {
  const { estado, cidade, tipo, frete, produto, sort, page } = filters;
  const result = queryResellers({ estado, cidade, tipo, frete, produto, sort, page });
  const estadoOptions = getEstadoOptions();
  const cidadeOptions = getCidadeOptions(estado);

  const paramsForPagination: Record<string, string> = { estado, cidade, tipo, frete, produto, sort };

  return (
    <div style={{ maxWidth: "var(--largura-conteudo)", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--esp-4)", marginBottom: "var(--esp-2)", flexWrap: "wrap" }}>
        <Badge tom="ouro">Área do Cliente Direto</Badge>
        <span style={{ font: "var(--type-mono)", color: "var(--text-suave)" }}>
          {getTotalResellerCount().toLocaleString("pt-BR")} lojas autorizadas ao todo
        </span>
      </div>
      <h1 style={{ fontSize: 36, marginBottom: "var(--esp-2)" }}>Encontre uma Loja Autorizada</h1>
      <p style={{ color: "var(--text-corpo)", maxWidth: "60ch", marginBottom: "var(--esp-8)" }}>
        Descubra onde comprar Trip Side perto de você. Filtra por estado, cidade, frete e o produto que você quer.
      </p>

      <div className="area-cliente-direto-grid" style={{ gap: "var(--esp-8)", alignItems: "start" }}>
        <aside aria-label="Filtros de busca" style={{ position: "sticky", top: 100 }}>
          <FiltersForm
            estadoOptions={estadoOptions}
            cidadeOptions={cidadeOptions.map((c) => ({ value: c, label: c }))}
            estado={estado}
            cidade={cidade}
            tipo={tipo}
            frete={frete}
            produto={produto}
            sort={sort}
          />
        </aside>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-4)" }}>
          <span style={{ font: "var(--type-mono)", color: "var(--text-suave)" }}>
            {result.total.toLocaleString("pt-BR")} loja(s) encontrada(s)
          </span>
          {result.items.map((r) => (
            <ResellerCard key={r.id} r={r} />
          ))}
          {result.total === 0 && <p style={{ color: "var(--text-suave)", padding: "var(--esp-8) 0" }}>Nada aqui com esse filtro.</p>}
          <Pagination page={result.page} totalPages={result.totalPages} params={paramsForPagination} />
        </div>
      </div>
    </div>
  );
}
