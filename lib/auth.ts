import "server-only";
import { cookies } from "next/headers";

export { PLACEHOLDER_USUARIO, PLACEHOLDER_SENHA } from "@/lib/auth-constants";

const SESSION_COOKIE = "ts_cliente_session";

export async function hasClienteSession() {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === "ok";
}

export async function createClienteSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
}

export async function destroyClienteSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}
