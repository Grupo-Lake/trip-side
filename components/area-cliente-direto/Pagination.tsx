import Link from "next/link";

function pageHref(params: Record<string, string>, page: number) {
  const search = new URLSearchParams({ ...params, page: String(page) });
  return `/area-cliente-direto?${search.toString()}`;
}

export function Pagination({
  page,
  totalPages,
  params,
}: {
  page: number;
  totalPages: number;
  params: Record<string, string>;
}) {
  if (totalPages <= 1) return null;

  const prev = Math.max(1, page - 1);
  const next = Math.min(totalPages, page + 1);

  // Small window of page numbers around the current page — never a "jump to end" control,
  // so paging through the whole directory always costs one request per page.
  const windowStart = Math.max(1, page - 2);
  const windowEnd = Math.min(totalPages, page + 2);
  const pages = [];
  for (let p = windowStart; p <= windowEnd; p++) pages.push(p);

  return (
    <nav aria-label="Paginação" style={{ display: "flex", alignItems: "center", gap: "var(--esp-2)", flexWrap: "wrap", marginTop: "var(--esp-6)" }}>
      <Link
        href={pageHref(params, prev)}
        aria-disabled={page === 1}
        style={{
          borderBottom: "none",
          padding: "8px 14px",
          border: "2px solid var(--stroke-media)",
          color: page === 1 ? "var(--text-desabilitado)" : "var(--ts-off-white)",
          pointerEvents: page === 1 ? "none" : "auto",
          font: "var(--type-label)",
          letterSpacing: "var(--track-label)",
        }}
      >
        ← Anterior
      </Link>
      {pages.map((p) => (
        <Link
          key={p}
          href={pageHref(params, p)}
          style={{
            borderBottom: "none",
            padding: "8px 14px",
            border: `2px solid ${p === page ? "var(--ts-roxo)" : "var(--stroke-media)"}`,
            background: p === page ? "var(--ts-roxo)" : "transparent",
            color: "var(--ts-off-white)",
            font: "var(--type-label)",
            letterSpacing: "var(--track-label)",
          }}
        >
          {p}
        </Link>
      ))}
      <Link
        href={pageHref(params, next)}
        aria-disabled={page === totalPages}
        style={{
          borderBottom: "none",
          padding: "8px 14px",
          border: "2px solid var(--stroke-media)",
          color: page === totalPages ? "var(--text-desabilitado)" : "var(--ts-off-white)",
          pointerEvents: page === totalPages ? "none" : "auto",
          font: "var(--type-label)",
          letterSpacing: "var(--track-label)",
        }}
      >
        Próxima →
      </Link>
      <span style={{ font: "var(--type-mono)", color: "var(--text-suave)", marginLeft: "var(--esp-2)" }}>
        Página {page} de {totalPages}
      </span>
    </nav>
  );
}
