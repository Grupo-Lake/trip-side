"use client";

import { FormEvent } from "react";
import { Field, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { FRETE_OPTIONS, PRODUCTS, TIPOS_LOJA } from "@/lib/resellers";

export function FiltersForm({
  estadoOptions,
  cidadeOptions,
  estado,
  cidade,
  tipo,
  frete,
  produto,
  sort,
}: {
  estadoOptions: { value: string; label: string }[];
  cidadeOptions: { value: string; label: string }[];
  estado: string;
  cidade: string;
  tipo: string;
  frete: string;
  produto: string;
  sort: string;
}) {
  const submitOnChange = (e: FormEvent<HTMLSelectElement>) => {
    e.currentTarget.form?.requestSubmit();
  };

  return (
    <form action="/area-cliente-direto" method="get" style={{ display: "flex", flexDirection: "column", gap: "var(--esp-5)" }}>
      <Field rotulo="Estado" htmlFor="estado">
        <Select
          id="estado"
          name="estado"
          defaultValue={estado}
          onChange={submitOnChange}
          options={[{ value: "todos", label: "Todos os estados" }, ...estadoOptions]}
        />
      </Field>
      <Field rotulo="Cidade" htmlFor="cidade">
        <Select
          id="cidade"
          name="cidade"
          defaultValue={cidade}
          onChange={submitOnChange}
          options={[{ value: "todas", label: "Todas as cidades" }, ...cidadeOptions]}
        />
      </Field>
      <Field rotulo="Tipo de Loja" htmlFor="tipo">
        <Select
          id="tipo"
          name="tipo"
          defaultValue={tipo}
          onChange={submitOnChange}
          options={[{ value: "todos", label: "Todos os tipos" }, ...TIPOS_LOJA.map((t) => ({ value: t, label: t }))]}
        />
      </Field>
      <Field rotulo="Frete" htmlFor="frete">
        <Select
          id="frete"
          name="frete"
          defaultValue={frete}
          onChange={submitOnChange}
          options={[{ value: "todos", label: "Qualquer frete" }, ...FRETE_OPTIONS]}
        />
      </Field>
      <Field rotulo="Tem o produto" htmlFor="produto">
        <Select
          id="produto"
          name="produto"
          defaultValue={produto}
          onChange={submitOnChange}
          options={[{ value: "todos", label: "Qualquer produto" }, ...PRODUCTS.map((p) => ({ value: p.id, label: p.nome }))]}
        />
      </Field>
      <Field rotulo="Ordenar por" htmlFor="sort">
        <Select
          id="sort"
          name="sort"
          defaultValue={sort}
          onChange={submitOnChange}
          options={[
            { value: "relevancia", label: "Relevância" },
            { value: "localidade", label: "Localidade (A-Z)" },
            { value: "frete", label: "Frete" },
          ]}
        />
      </Field>
      <noscript>
        <Button variant="contorno" size="md" block>
          Aplicar filtros
        </Button>
      </noscript>
    </form>
  );
}
