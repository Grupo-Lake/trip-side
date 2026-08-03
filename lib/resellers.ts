// Seeded, deterministic mock dataset standing in for the real reseller database.
// Generated once per server process (not per request) and queried in-memory.

export interface Product {
  id: string;
  nome: string;
}

export const PRODUCTS: Product[] = [
  { id: "wordmark-roxo", nome: "Moletom Wordmark Roxo" },
  { id: "urso-costas", nome: "Moletom Urso Cash Costas" },
  { id: "lockup-off-white", nome: "Moletom Lockup Off-White" },
  { id: "payaso-costas", nome: "Moletom Payaso Costas" },
];

export type FreteTipo = "gratis" | "padrao" | "retirada";

export const FRETE_OPTIONS: { value: FreteTipo; label: string }[] = [
  { value: "gratis", label: "Frete Grátis" },
  { value: "padrao", label: "Frete Padrão" },
  { value: "retirada", label: "Somente Retirada" },
];

const FRETE_ORDER: Record<FreteTipo, number> = { gratis: 0, padrao: 1, retirada: 2 };

export const TIPOS_LOJA = ["Multimarcas", "Skate Shop", "Concept Store", "Streetwear Boutique", "Loja de Bairro"];

export interface Reseller {
  id: number;
  nome: string;
  tipo: string;
  endereco: string;
  cidade: string;
  estado: string;
  regiao: string;
  frete: FreteTipo;
  produtos: string[];
  relevancia: number;
}

const ESTADOS: { uf: string; regiao: string; cidades: string[]; peso: number }[] = [
  { uf: "SP", regiao: "Sudeste", cidades: ["São Paulo", "Santos", "Campinas", "Sorocaba", "Guarulhos", "São Bernardo do Campo"], peso: 10 },
  { uf: "RJ", regiao: "Sudeste", cidades: ["Rio de Janeiro", "Niterói", "Nova Iguaçu", "Duque de Caxias"], peso: 6 },
  { uf: "MG", regiao: "Sudeste", cidades: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"], peso: 6 },
  { uf: "ES", regiao: "Sudeste", cidades: ["Vitória", "Vila Velha"], peso: 2 },
  { uf: "PR", regiao: "Sul", cidades: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"], peso: 5 },
  { uf: "SC", regiao: "Sul", cidades: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"], peso: 4 },
  { uf: "RS", regiao: "Sul", cidades: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria"], peso: 5 },
  { uf: "DF", regiao: "Centro-Oeste", cidades: ["Brasília"], peso: 3 },
  { uf: "GO", regiao: "Centro-Oeste", cidades: ["Goiânia", "Anápolis"], peso: 3 },
  { uf: "MT", regiao: "Centro-Oeste", cidades: ["Cuiabá", "Várzea Grande"], peso: 2 },
  { uf: "MS", regiao: "Centro-Oeste", cidades: ["Campo Grande", "Dourados"], peso: 2 },
  { uf: "BA", regiao: "Nordeste", cidades: ["Salvador", "Feira de Santana", "Vitória da Conquista"], peso: 5 },
  { uf: "PE", regiao: "Nordeste", cidades: ["Recife", "Olinda", "Caruaru"], peso: 4 },
  { uf: "CE", regiao: "Nordeste", cidades: ["Fortaleza", "Juazeiro do Norte"], peso: 4 },
  { uf: "PB", regiao: "Nordeste", cidades: ["João Pessoa", "Campina Grande"], peso: 2 },
  { uf: "RN", regiao: "Nordeste", cidades: ["Natal", "Mossoró"], peso: 2 },
  { uf: "MA", regiao: "Nordeste", cidades: ["São Luís"], peso: 2 },
  { uf: "PA", regiao: "Norte", cidades: ["Belém", "Ananindeua"], peso: 3 },
  { uf: "AM", regiao: "Norte", cidades: ["Manaus"], peso: 2 },
];

const NOME_PREFIXES = [
  "Concreto", "Nômade", "Trilho", "Urban", "Underground", "Vértice", "Bloco", "Fábrica",
  "Quadra", "Setor", "Base", "Muro", "Beco", "Estação", "Vielas", "Zona", "Kombi", "Ladeira",
];
const NOME_SUFIXOS = [
  "Wear", "Store", "Multimarcas", "Concept", "Streetwear", "Shop", "Boutique", "Co.", "Clube", "Ponto",
];
const RUA_PALAVRAS = [
  "das Flores", "XV de Novembro", "Augusta", "Sete de Setembro", "do Comércio", "Marechal Deodoro",
  "Barão do Rio Branco", "Getúlio Vargas", "das Acácias", "Rio Branco", "Amazonas", "Paraná",
];

// mulberry32 — small, dependency-free seeded PRNG so the dataset is stable across server restarts.
function mulberry32(seed: number) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function weightedEstado(rand: () => number) {
  const total = ESTADOS.reduce((sum, e) => sum + e.peso, 0);
  let roll = rand() * total;
  for (const e of ESTADOS) {
    roll -= e.peso;
    if (roll <= 0) return e;
  }
  return ESTADOS[0];
}

function pick<T>(rand: () => number, arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

function pickProdutos(rand: () => number): string[] {
  const count = 1 + Math.floor(rand() * PRODUCTS.length);
  const pool = [...PRODUCTS.map((p) => p.id)];
  const chosen: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rand() * pool.length);
    chosen.push(pool.splice(idx, 1)[0]);
  }
  return chosen;
}

function pickFrete(rand: () => number): FreteTipo {
  const roll = rand();
  if (roll < 0.25) return "gratis";
  if (roll < 0.8) return "padrao";
  return "retirada";
}

const TOTAL_RESELLERS = 4200;

function generateResellers(): Reseller[] {
  const rand = mulberry32(20260803);
  const list: Reseller[] = [];
  for (let i = 0; i < TOTAL_RESELLERS; i++) {
    const estado = weightedEstado(rand);
    const cidade = pick(rand, estado.cidades);
    const nome = `${pick(rand, NOME_PREFIXES)} ${pick(rand, NOME_SUFIXOS)}`;
    const numero = 100 + Math.floor(rand() * 2400);
    list.push({
      id: i + 1,
      nome,
      tipo: pick(rand, TIPOS_LOJA),
      endereco: `Rua ${pick(rand, RUA_PALAVRAS)}, ${numero}`,
      cidade,
      estado: estado.uf,
      regiao: estado.regiao,
      frete: pickFrete(rand),
      produtos: pickProdutos(rand),
      relevancia: Math.round(rand() * 1000) / 10,
    });
  }
  return list;
}

// Computed once per server process and reused across requests.
const RESELLERS = generateResellers();

export const PAGE_SIZE = 24;

export type SortKey = "relevancia" | "localidade" | "frete";

export interface ResellerQuery {
  estado?: string;
  cidade?: string;
  tipo?: string;
  frete?: string;
  produto?: string;
  sort?: SortKey;
  page?: number;
}

export interface ResellerResult {
  items: Reseller[];
  total: number;
  page: number;
  totalPages: number;
  pageSize: number;
}

export function getEstadoOptions() {
  return ESTADOS.map((e) => ({ value: e.uf, label: e.uf })).sort((a, b) => a.value.localeCompare(b.value));
}

export function getCidadeOptions(estado?: string) {
  const source = estado && estado !== "todos" ? ESTADOS.filter((e) => e.uf === estado) : ESTADOS;
  const cidades = new Set<string>();
  source.forEach((e) => e.cidades.forEach((c) => cidades.add(c)));
  return [...cidades].sort((a, b) => a.localeCompare(b));
}

export function getTotalResellerCount() {
  return RESELLERS.length;
}

export function queryResellers(query: ResellerQuery): ResellerResult {
  const { estado = "todos", cidade = "todas", tipo = "todos", frete = "todos", produto = "todos", sort = "relevancia" } = query;

  let filtered = RESELLERS.filter((r) => {
    if (estado !== "todos" && r.estado !== estado) return false;
    if (cidade !== "todas" && r.cidade !== cidade) return false;
    if (tipo !== "todos" && r.tipo !== tipo) return false;
    if (frete !== "todos" && r.frete !== frete) return false;
    if (produto !== "todos" && !r.produtos.includes(produto)) return false;
    return true;
  });

  filtered = filtered.slice().sort((a, b) => {
    if (sort === "localidade") {
      return a.estado.localeCompare(b.estado) || a.cidade.localeCompare(b.cidade) || a.nome.localeCompare(b.nome);
    }
    if (sort === "frete") {
      return FRETE_ORDER[a.frete] - FRETE_ORDER[b.frete] || a.nome.localeCompare(b.nome);
    }
    return b.relevancia - a.relevancia || a.nome.localeCompare(b.nome);
  });

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  // Page size is fixed server-side and never taken from client input — this, together with the
  // login gate, keeps a scraper from requesting one giant page and dumping the whole directory.
  const page = Math.min(Math.max(1, Math.floor(query.page ?? 1)), totalPages);
  const start = (page - 1) * PAGE_SIZE;

  return {
    items: filtered.slice(start, start + PAGE_SIZE),
    total,
    page,
    totalPages,
    pageSize: PAGE_SIZE,
  };
}
