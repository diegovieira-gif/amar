import { createDirectus, rest, staticToken } from '@directus/sdk';

export interface Categoria {
  id: string;
  status?: string;
  nome?: string;
  descricao?: string;
  icone?: string;
  cor?: string;
}

export interface Servico {
  id: string;
  status?: string;
  nome?: string;
  descricao?: string;
  categoria?: string | Categoria;
}

export interface Campanha {
  id: string;
  status?: string;
  titulo?: string;
  imagem?: string;
  link?: string;
}

export interface Schema {
  amar_categorias: Categoria[];
  amar_servicos: Servico[];
  amar_campanhas: Campanha[];
}

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const directusToken = process.env.DIRECTUS_TOKEN || '';

export const directus = createDirectus<Schema>(directusUrl)
  .with(staticToken(directusToken))
  .with(rest());
