export const serviceCategories = [
  "Em destaque",
  "Manutenção",
  "Limpeza",
  "Saúde",
  "Educação",
  "Segurança",
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  category: string;
  iconKey: string;
};

export const services: Service[] = [
  {
    slug: "instalacao-reparos",
    title: "Instalação & Reparos",
    description: "Serviços de manutenção residencial e comercial com profissionais certificados.",
    category: "Manutenção",
    iconKey: "wrench",
  },
  {
    slug: "limpeza-premium",
    title: "Limpeza Premium",
    description: "Limpeza completa com produtos ecológicos e equipe especializada.",
    category: "Limpeza",
    iconKey: "sparkles",
  },
  {
    slug: "apoio-juridico",
    title: "Apoio Jurídico",
    description: "Consultoria jurídica e acompanhamento de processos com advogados experientes.",
    category: "Em destaque",
    iconKey: "scale",
  },
  {
    slug: "saude-bem-estar",
    title: "Saúde e Bem-Estar",
    description: "Consultas médicas, exames, terapias e programas de bem-estar personalizados.",
    category: "Saúde",
    iconKey: "heart",
  },
  {
    slug: "cursos-capacitacao",
    title: "Cursos e Capacitação",
    description: "Treinamentos profissionais, workshops e certificações em diversas áreas.",
    category: "Educação",
    iconKey: "book",
  },
  {
    slug: "seguranca-protecao",
    title: "Segurança e Proteção",
    description: "Sistemas de segurança, monitoramento 24h e consultoria em proteção residencial.",
    category: "Segurança",
    iconKey: "shield",
  },
  {
    slug: "transporte-executivo",
    title: "Transporte Executivo",
    description: "Motoristas profissionais, veículos premium e rotas personalizadas.",
    category: "Em destaque",
    iconKey: "car",
  },
  {
    slug: "consultoria-financeira",
    title: "Consultoria Financeira",
    description: "Planejamento financeiro, investimentos e gestão patrimonial sob medida.",
    category: "Em destaque",
    iconKey: "chart",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
