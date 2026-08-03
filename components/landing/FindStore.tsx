import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function FindStore() {
  return (
    <section style={{ padding: "clamp(20px,5vw,40px)", maxWidth: "var(--largura-conteudo)", margin: "0 auto clamp(40px,8vw,var(--esp-20))" }}>
      <Card variant="roxo" offset>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--esp-8)", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "52ch" }}>
            <h2 style={{ fontSize: 30 }}>Encontre onde comprar</h2>
            <p style={{ color: "var(--text-corpo)", margin: "var(--esp-3) 0 0" }}>
              Não é um revendedor? Descubra quem vende Trip Side perto de você. Faça login pra ver a lista completa de
              lojas autorizadas.
            </p>
          </div>
          <Button as="a" href="/area-cliente-direto" variant="branco" size="lg">
            Login / Cadastro
          </Button>
        </div>
      </Card>
    </section>
  );
}
