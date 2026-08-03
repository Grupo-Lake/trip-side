"use server";

import { redirect } from "next/navigation";
import { createClienteSession, destroyClienteSession, PLACEHOLDER_SENHA, PLACEHOLDER_USUARIO } from "@/lib/auth";

export interface LoginState {
  erro?: string;
}

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
  const usuario = String(formData.get("usuario") ?? "").trim();
  const senha = String(formData.get("senha") ?? "");

  if (usuario !== PLACEHOLDER_USUARIO || senha !== PLACEHOLDER_SENHA) {
    return { erro: "Usuário ou senha inválidos." };
  }

  await createClienteSession();
  redirect("/area-cliente-direto");
}

export async function logout() {
  await destroyClienteSession();
  redirect("/area-cliente-direto");
}
