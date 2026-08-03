"use client";

import { CSSProperties, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, useState } from "react";

export function Field({
  rotulo,
  obrigatorio = false,
  htmlFor,
  children,
  style,
}: {
  rotulo?: string;
  obrigatorio?: boolean;
  htmlFor?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--esp-2)", ...style }}>
      {rotulo && (
        <label
          htmlFor={htmlFor}
          style={{
            font: "var(--type-label)",
            letterSpacing: "var(--track-tag)",
            textTransform: "uppercase",
            color: "var(--text-suave)",
          }}
        >
          {rotulo}
          {obrigatorio && <span style={{ color: "var(--ts-vermelho)" }}> *</span>}
        </label>
      )}
      {children}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const [foco, setFoco] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--esp-2)",
        height: 48,
        padding: "0 var(--esp-4)",
        background: "var(--surface-inset)",
        border: `2px solid ${foco ? "var(--ts-roxo-400)" : "var(--stroke-sutil)"}`,
        borderRadius: "var(--raio-campo)",
        transition: "border-color var(--dur-rapido) var(--ease-padrao)",
      }}
    >
      <input
        {...props}
        onFocus={(e) => {
          setFoco(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFoco(false);
          props.onBlur?.(e);
        }}
        style={{
          flex: 1,
          minWidth: 0,
          height: "100%",
          background: "transparent",
          border: 0,
          outline: "none",
          color: "var(--ts-off-white)",
          font: "var(--type-corpo)",
        }}
      />
    </div>
  );
}

export function Select({
  options,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }) {
  const [foco, setFoco] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 48,
        padding: "0 var(--esp-4)",
        background: "var(--surface-inset)",
        border: `2px solid ${foco ? "var(--ts-roxo-400)" : "var(--stroke-sutil)"}`,
        borderRadius: "var(--raio-campo)",
        transition: "border-color var(--dur-rapido) var(--ease-padrao)",
      }}
    >
      <select
        {...props}
        onFocus={(e) => {
          setFoco(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFoco(false);
          props.onBlur?.(e);
        }}
        style={{
          flex: 1,
          minWidth: 0,
          height: "100%",
          width: "100%",
          background: "transparent",
          border: 0,
          outline: "none",
          color: "var(--ts-off-white)",
          font: "var(--type-corpo)",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: "var(--surface-raised)", color: "var(--ts-off-white)" }}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ rows = 4, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [foco, setFoco] = useState(false);
  return (
    <textarea
      {...props}
      rows={rows}
      onFocus={(e) => {
        setFoco(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setFoco(false);
        props.onBlur?.(e);
      }}
      style={{
        width: "100%",
        padding: "var(--esp-3) var(--esp-4)",
        background: "var(--surface-inset)",
        color: "var(--ts-off-white)",
        font: "var(--type-corpo)",
        resize: "vertical",
        outline: "none",
        border: `2px solid ${foco ? "var(--ts-roxo-400)" : "var(--stroke-sutil)"}`,
        borderRadius: "var(--raio-campo)",
        transition: "border-color var(--dur-rapido) var(--ease-padrao)",
      }}
    />
  );
}
