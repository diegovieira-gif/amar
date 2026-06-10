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
  imagem_capa: string | { id: string; type: string } | null;
  link_destino: string | null;
  url_instagram?: string | null;
  data_inicio: string | null;
  data_fim: string | null;
  status: string;
}

export interface AmarProjeto {
  id: string;
  status: string;
  ordem: number | null;
  titulo: string;
  descricao: string | null;
  imagem_capa: string | { id: string; type: string } | null;
  link_imagem?: string | null;
  tipo_link: string;
  link_destino: string | null;
}

export interface ChaveIa {
  id: string;
  provedor: string;
  chave: string;
  modelo: string | null;
  status: string;
  ativa: boolean;
}

export interface Schema {
  amar_categorias: AmarCategoria[];
  amar_servicos: AmarServico[];
  amar_campanhas: AmarCampanha[];
  amar_projetos: AmarProjeto[];
  chaves_ia: ChaveIa[];
}

export const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL!)
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN!));
