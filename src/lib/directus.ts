import { createDirectus, rest, staticToken } from '@directus/sdk';

export interface AmarCategoria {
  id: string;
  nome: string;
  slug: string;
  icone: string | null;
  cor_hex: string | null;
  ordem: number | null;
  status: string;
}

export interface AmarServico {
  id: string;
  status?: string;
  nome?: string;
  descricao?: string;
  categoria?: string | AmarCategoria;
}

export interface AmarCampanha {
  id: string;
  titulo: string;
  imagem_capa: string | null;
  link_destino: string | null;
  data_inicio: string | null;
  data_fim: string | null;
  status: string;
}

export interface Schema {
  amar_categorias: AmarCategoria[];
  amar_servicos: AmarServico[];
  amar_campanhas: AmarCampanha[];
}

export const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL!)
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN!));
