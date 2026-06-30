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
  titulo: string;
  slug: string;
  descricao_curta: string | null;
  documentos_necessarios: string | null;
  horario_atendimento: string | null;
  link_externo_acao: string | null;
  status: string;
  categoria_id: string | null;
  sobre: string | null;
  endereco_mapa: string | null;
}

export interface AmarCampanha {
  id: string;
  titulo: string;
  status: string | null;
  url_instagram: string | null;
  date_created: string | null;
}

export interface AmarProjeto {
  id: number;
  status: string;
  ordem: number | null;
  titulo: string;
  descricao: string | null;
  imagem_capa: string | null;
  link_destino: string | null;
  tipo_link: string | null;
  link_imagem: string | null;
}

export interface AmarCurso {
  id: number;
  titulo: string | null;
  descricao: string | null;
  data: string | null;
  horario: string | null;
  local: string | null;
  vagas: number | null;
  status_curso: string | null;
  requisitos: string | null;
  link: string | null;
}

export interface AmarContato {
  id: number;
  nome: string;
  descricao: string | null;
  telefone: string | null;
  endereco: string | null;
}

export interface AmarSonho {
  id: number;
  nome: string | null;
  telefone: string | null;
  cpf: string | null;
  audio: string | null;
  date_created: string | null;
}

export interface ConfigIntegracao {
  id: number;
  nome: string;
  gemini_api_key: string;
  status: string;
}

export interface Schema {
  amar_categorias: AmarCategoria[];
  amar_servicos: AmarServico[];
  amar_campanhas: AmarCampanha[];
  amar_projetos: AmarProjeto[];
  amar_cursos: AmarCurso[];
  amar_contatos: AmarContato[];
  amar_sonhos: AmarSonho[];
  config_integracao: ConfigIntegracao[];
}

export const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_DIRECTUS_URL!)
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN!));

