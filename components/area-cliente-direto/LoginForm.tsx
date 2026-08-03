"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/area-cliente-direto/actions";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { PLACEHOLDER_SENHA, PLACEHOLDER_USUARIO } from "@/lib/auth-constants";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--esp-6)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--esp-4)" }}>
        <Tag tom="ouro">Área do Cliente Direto</Tag>
        <span style={{ font: "var(--type-mono)", color: "var(--text-suave)" }}>acesso restrito</span>
      </div>
      <h1 style={{ fontSize: 32 }}>Entrar</h1>
      <p style={{ color: "var(--text-corpo)", fontSize: 14, margin: 0 }}>
        Login exclusivo pra quem é fã da marca: entra pra ver a lista completa de lojas autorizadas Trip Side perto
        de você. Use o usuário e senha de demonstração abaixo — o cadastro real de cliente entra numa próxima etapa.
      </p>
      <div
        style={{
          background: "var(--surface-inset)",
          border: "1px solid var(--stroke-sutil)",
          padding: "var(--esp-4)",
          font: "var(--type-mono)",
          color: "var(--text-suave)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <span>usuário: {PLACEHOLDER_USUARIO}</span>
        <span>senha: {PLACEHOLDER_SENHA}</span>
      </div>

      <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "var(--esp-4)" }}>
        <Field rotulo="Usuário" htmlFor="usuario">
          <Input id="usuario" name="usuario" autoComplete="username" defaultValue={PLACEHOLDER_USUARIO} />
        </Field>
        <Field rotulo="Senha" htmlFor="senha">
          <Input id="senha" name="senha" type="password" autoComplete="current-password" defaultValue={PLACEHOLDER_SENHA} />
        </Field>
        {state.erro && <p style={{ color: "var(--ts-vermelho)", fontSize: 14, margin: 0 }}>{state.erro}</p>}
        <Button variant="roxo" size="lg" block disabled={pending}>
          {pending ? "Entrando…" : "Entrar"}
        </Button>
      </form>
    </div>
  );
}
