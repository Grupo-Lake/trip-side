import { CSSProperties, ElementType, ReactNode } from "react";

export function TagHeading({
  children,
  tamanho = 64,
  rotacao = -2,
  as: Tag = "h2" as ElementType,
  style,
}: {
  children?: ReactNode;
  tamanho?: number;
  rotacao?: number;
  as?: ElementType;
  style?: CSSProperties;
}) {
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: "var(--font-tag)",
        fontSize: tamanho,
        lineHeight: 0.92,
        color: "var(--ts-off-white)",
        transform: `rotate(${rotacao}deg)`,
        transformOrigin: "left center",
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
