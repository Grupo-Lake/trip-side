"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const FIELDS = [
  "nomeLoja",
  "razaoSocial",
  "cnpj",
  "inscricaoEstadual",
  "telefone",
  "instagramLoja",
  "cep",
  "endereco",
  "numero",
  "bairro",
  "complemento",
  "cidade",
  "estado",
  "marcasAtuais",
] as const;

type FieldKey = (typeof FIELDS)[number];

const LABELS: Record<FieldKey, string> = {
  nomeLoja: "Nome da Loja",
  razaoSocial: "Razão Social",
  cnpj: "CNPJ",
  inscricaoEstadual: "Inscrição Estadual",
  telefone: "Telefone Principal",
  instagramLoja: "Instagram da Loja",
  cep: "CEP",
  endereco: "Endereço da Loja Física",
  numero: "Número",
  bairro: "Bairro",
  complemento: "Complemento",
  cidade: "Cidade",
  estado: "Estado",
  marcasAtuais: "Marcas com as quais trabalha atualmente",
};

const REQUIRED: Partial<Record<FieldKey, boolean>> = {
  nomeLoja: true,
  razaoSocial: true,
  cnpj: true,
  telefone: true,
  cep: true,
  endereco: true,
  numero: true,
  bairro: true,
  cidade: true,
  estado: true,
};

const emptyForm = () => FIELDS.reduce((acc, k) => ({ ...acc, [k]: "" }), {} as Record<FieldKey, string>);

export function SignupDialog({ aberto, onFechar }: { aberto: boolean; onFechar: () => void }) {
  const [form, setForm] = useState<Record<FieldKey, string>>(emptyForm);

  const handleChange = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
  };

  const enviarWhatsApp = () => {
    const linhas = FIELDS.map((k) => `${LABELS[k]}: ${form[k] || "—"}`);
    const msg = "Cadastro de Revendedor Trip Side\n\n" + linhas.join("\n");
    window.open(`https://wa.me/5511912252298?text=${encodeURIComponent(msg)}`, "_blank");
    setForm(emptyForm());
    onFechar();
  };

  return (
    <Dialog aberto={aberto} titulo="Cadastro de Revendedor" onFechar={onFechar} largura={720}>
      <p style={{ color: "var(--text-suave)", margin: "0 0 var(--esp-6)", fontSize: 14 }}>
        Preenche os dados da tua loja. A gente confere e chama no WhatsApp em até 1 dia útil.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "var(--esp-4)",
          maxHeight: "52vh",
          overflowY: "auto",
          paddingRight: "var(--esp-2)",
        }}
      >
        {FIELDS.map((key) => {
          const span2 = key === "endereco" || key === "marcasAtuais";
          return (
            <Field
              key={key}
              rotulo={LABELS[key]}
              obrigatorio={!!REQUIRED[key]}
              htmlFor={key}
              style={span2 ? { gridColumn: "1 / -1" } : undefined}
            >
              {key === "marcasAtuais" ? (
                <Textarea id={key} name={key} value={form[key]} onChange={handleChange(key)} rows={2} />
              ) : (
                <Input id={key} name={key} value={form[key]} onChange={handleChange(key)} />
              )}
            </Field>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "var(--esp-3)",
          marginTop: "var(--esp-6)",
          paddingTop: "var(--esp-5)",
          borderTop: "1px solid var(--stroke-sutil)",
        }}
      >
        <Button variant="contorno" size="md" onClick={onFechar}>
          Cancelar
        </Button>
        <Button variant="roxo" size="md" onClick={enviarWhatsApp}>
          Enviar pelo WhatsApp
        </Button>
      </div>
    </Dialog>
  );
}
