import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FRETE_OPTIONS, PRODUCTS, type Reseller } from "@/lib/resellers";

const FRETE_LABEL = Object.fromEntries(FRETE_OPTIONS.map((f) => [f.value, f.label]));
const PRODUTO_LABEL = Object.fromEntries(PRODUCTS.map((p) => [p.id, p.nome]));

export function ResellerCard({ r }: { r: Reseller }) {
  return (
    <Card variant="concreto">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--esp-6)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--esp-3)", flexWrap: "wrap" }}>
            <h3 style={{ fontSize: 18 }}>{r.nome}</h3>
            <Tag tom="marca">{r.tipo}</Tag>
          </div>
          <span style={{ color: "var(--text-corpo)", fontSize: 14 }}>{r.endereco}</span>
          <span style={{ font: "var(--type-mono)", color: "var(--text-suave)" }}>
            {r.cidade} / {r.estado}
          </span>
          <div style={{ display: "flex", gap: "var(--esp-2)", flexWrap: "wrap", marginTop: "var(--esp-1)" }}>
            <span
              style={{
                font: "var(--type-label)",
                letterSpacing: "var(--track-label)",
                color: "var(--text-suave)",
                border: "1px solid var(--stroke-sutil)",
                padding: "3px 8px",
              }}
            >
              {FRETE_LABEL[r.frete]}
            </span>
            {r.produtos.map((id) => (
              <span
                key={id}
                style={{
                  font: "var(--type-label)",
                  letterSpacing: "var(--track-label)",
                  color: "var(--ts-roxo-400)",
                  border: "1px solid var(--ts-roxo)",
                  padding: "3px 8px",
                }}
              >
                {PRODUTO_LABEL[id]}
              </span>
            ))}
          </div>
        </div>
        <span style={{ alignSelf: "center", font: "var(--type-label)", letterSpacing: "var(--track-tag)", color: "var(--ts-roxo-400)", whiteSpace: "nowrap" }}>
          Ver no mapa →
        </span>
      </div>
    </Card>
  );
}
