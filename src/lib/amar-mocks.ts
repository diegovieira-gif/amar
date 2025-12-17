export type Pillar = {
  id: string;
  title: string;
  description: string;
  iconKey: string;
};

export type CommunityTopic = {
  id: string;
  title: string;
  description: string;
  pillar: string;
  messagesCount: number;
  lastActivity: string;
};

export type CommunityThread = {
  id: string;
  topicId: string;
  author: string;
  role: string;
  content: string;
  timestamp: string;
  likes: number;
};

export type Survey = {
  id: string;
  title: string;
  description: string;
  pillar: string;
  respondents: number;
  status: "active" | "closed";
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  pillar: string;
};

export type MenuItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  iconKey: string;
};

export type UserProfile = {
  id: string;
  name: string;
  neighborhood: string;
  status: string;
  coursesCompleted: number;
  eventsAttended: number;
  servicesAccessed: number;
};

export const pillars: Pillar[] = [
  {
    id: "health",
    title: "Saúde e Bem-Estar",
    description: "Agendamentos, acompanhamento e feedback contínuo",
    iconKey: "health",
  },
  {
    id: "education",
    title: "Educação e Capacitação",
    description: "Cursos, oficinas e certificações profissionais",
    iconKey: "education",
  },
  {
    id: "entrepreneurship",
    title: "Empreendedorismo",
    description: "Suporte jurídico, financeiro e marketing",
    iconKey: "entrepreneurship",
  },
  {
    id: "security",
    title: "Segurança e Cidadania",
    description: "Proteção, denúncia e acompanhamento psicossocial",
    iconKey: "security",
  },
  {
    id: "community",
    title: "Comunidade e Participação",
    description: "Pesquisas, eventos e fóruns de participação social",
    iconKey: "community",
  },
  {
    id: "assistance",
    title: "Assistência Social e Delivery Solidário",
    description: "Apoio logístico e entrega de benefícios",
    iconKey: "assistance",
  },
];

export const communityTopics: CommunityTopic[] = [
  {
    id: "topic-1",
    title: "Direitos da Mulher Trabalhadora",
    description: "Discussões sobre direitos laborais, assédio e equidade salarial",
    pillar: "security",
    messagesCount: 23,
    lastActivity: "Hoje às 14:30",
  },
  {
    id: "topic-2",
    title: "Maternidade e Apoio Social",
    description: "Compartilhamento de experiências sobre programas de apoio e benefícios",
    pillar: "health",
    messagesCount: 17,
    lastActivity: "Ontem às 09:15",
  },
  {
    id: "topic-3",
    title: "Empreendedorismo Feminino",
    description: "Networking, dicas de negócios e histórias de sucesso",
    pillar: "entrepreneurship",
    messagesCount: 31,
    lastActivity: "Hoje às 11:45",
  },
  {
    id: "topic-4",
    title: "Saúde Mental e Bem-Estar",
    description: "Cuidado emocional, dicas de autocuidado e recursos psicológicos",
    pillar: "health",
    messagesCount: 42,
    lastActivity: "Hoje às 16:20",
  },
  {
    id: "topic-5",
    title: "Segurança e Prevenção",
    description: "Dicas, recursos e conscientização sobre prevenção e proteção",
    pillar: "security",
    messagesCount: 18,
    lastActivity: "2 dias atrás",
  },
  {
    id: "topic-6",
    title: "Capacitação Profissional",
    description: "Compartilhamento de cursos, certificações e oportunidades de aprendizado",
    pillar: "education",
    messagesCount: 25,
    lastActivity: "Hoje às 10:00",
  },
];

export const communityThreads: Record<string, CommunityThread[]> = {
  "topic-1": [
    {
      id: "thread-1",
      topicId: "topic-1",
      author: "Ana Silva",
      role: "Facilitadora AMAR",
      content:
        "Olá! Este fórum é um espaço seguro para compartilharmos nossas experiências e dúvidas sobre direitos trabalhistas. Vocês têm alguma situação que gostariam de discutir?",
      timestamp: "Hoje às 14:30",
      likes: 8,
    },
    {
      id: "thread-2",
      topicId: "topic-1",
      author: "Maria Santos",
      role: "Participante",
      content:
        "Tenho uma dúvida sobre licença maternidade. Meu patrão está dizendo que não pode me manter no cargo se eu tirar os 6 meses. Isso é legal?",
      timestamp: "Hoje às 15:10",
      likes: 12,
    },
    {
      id: "thread-3",
      topicId: "topic-1",
      author: "Carla Oliveira",
      role: "Advogada Voluntária",
      content:
        "Oi Maria! Não, isso é discriminação e está proibido por lei. A licença maternidade é um direito garantido. Você pode denunciar isso ao ministério do trabalho. Posso ajudar com mais detalhes?",
      timestamp: "Hoje às 15:45",
      likes: 25,
    },
    {
      id: "thread-4",
      topicId: "topic-1",
      author: "Jessica Costa",
      role: "Participante",
      content:
        "Eu também passei por isso! Documentei tudo e fiz a denúncia. O AMAR me ajudou com a documentação. Agora estou recebendo normalmente e meu emprego foi garantido.",
      timestamp: "Hoje às 16:20",
      likes: 18,
    },
  ],
  "topic-2": [
    {
      id: "thread-5",
      topicId: "topic-2",
      author: "Priscila Mendes",
      role: "Facilitadora AMAR",
      content:
        "Bem-vindas! Este espaço é para trocarmos experiências sobre maternidade e os benefícios sociais disponíveis. Qual é a sua maior dúvida neste momento?",
      timestamp: "Ontem às 09:15",
      likes: 6,
    },
    {
      id: "thread-6",
      topicId: "topic-2",
      author: "Renata Lima",
      role: "Participante",
      content:
        "Alguém sabe como funciona o apoio para mães solo? Minha filha tem 2 anos e estou com dificuldades.",
      timestamp: "Ontem às 14:30",
      likes: 9,
    },
  ],
};

export const surveys: Survey[] = [
  {
    id: "survey-1",
    title: "Como é sua experiência com os serviços AMAR?",
    description: "Queremos ouvir sua opinião para melhorar ainda mais",
    pillar: "community",
    respondents: 234,
    status: "active",
  },
  {
    id: "survey-2",
    title: "Que tipo de curso você gostaria de fazer?",
    description: "Ajude-nos a definir a próxima oferta de capacitação",
    pillar: "education",
    respondents: 156,
    status: "active",
  },
  {
    id: "survey-3",
    title: "Satisfação com atendimento psicossocial",
    description: "Sua avaliação é muito importante para nós",
    pillar: "security",
    respondents: 89,
    status: "closed",
  },
];

export const events: Event[] = [
  {
    id: "event-1",
    title: "Oficina: Empreendedorismo Feminino",
    description: "Aprenda estratégias para iniciar seu próprio negócio com segurança",
    date: "22 de dezembro de 2025",
    time: "14:00",
    location: "Sala de Treinamento AMAR - Centro",
    capacity: 30,
    pillar: "entrepreneurship",
  },
  {
    id: "event-2",
    title: "Palestra: Direitos Reprodutivos",
    description: "Conheça seus direitos e os recursos de saúde disponíveis",
    date: "28 de dezembro de 2025",
    time: "10:00",
    location: "Auditório Secretaria da Mulher",
    capacity: 50,
    pillar: "health",
  },
  {
    id: "event-3",
    title: "Curso: Segurança Pessoal e Prevenção",
    description: "Técnicas práticas de proteção e orientações de segurança",
    date: "29 de dezembro de 2025",
    time: "16:00",
    location: "Sala de Prática - Bairro Industrial",
    capacity: 20,
    pillar: "security",
  },
  {
    id: "event-4",
    title: "Encontro: Histórias de Sucesso",
    description: "Mulheres empreendedoras compartilham suas jornadas",
    date: "02 de janeiro de 2026",
    time: "19:00",
    location: "Sala de Conferências",
    capacity: 40,
    pillar: "entrepreneurship",
  },
];

export const userProfileMock: UserProfile = {
  id: "user-001",
  name: "Gabriela Santos",
  neighborhood: "Bairro Industrial, Aracaju",
  status: "Perfil Completo",
  coursesCompleted: 3,
  eventsAttended: 7,
  servicesAccessed: 12,
};

export type ContactChannel = {
  label: string;
  value: string;
  icon: string;
};

export type HotlineNumber = {
  number: string;
  label: string;
  description: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: "available" | "soon";
};

export type EntrepreneurshipService = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type AssistanceService = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TermsSection = {
  id: string;
  title: string;
  content: string;
};

export type AboutSection = {
  id: string;
  title: string;
  content: string[];
};

export const menuItems: MenuItem[] = [
  {
    id: "menu-1",
    label: "Central de Atendimento",
    description: "Fale com nossa equipe de suporte",
    href: "/menu/central-atendimento",
    iconKey: "headphones",
  },
  {
    id: "menu-2",
    label: "Canais de Denúncia e Proteção",
    description: "Denuncie com segurança e anonimato",
    href: "/menu/canais-denuncia-protecao",
    iconKey: "alert",
  },
  {
    id: "menu-3",
    label: "Cursos e Certificados",
    description: "Acesse seus certificados e histórico",
    href: "/menu/cursos-certificados",
    iconKey: "award",
  },
  {
    id: "menu-4",
    label: "Empreendedorismo",
    description: "Apoio jurídico, financeiro e marketing",
    href: "/menu/empreendedorismo",
    iconKey: "briefcase",
  },
  {
    id: "menu-5",
    label: "Assistência & Delivery Solidário",
    description: "Saiba como acessar benefícios e apoio",
    href: "/menu/assistencia-delivery",
    iconKey: "heart-hands",
  },
  {
    id: "menu-6",
    label: "Termos e Privacidade",
    description: "Políticas e termos de uso",
    href: "/menu/termos-privacidade",
    iconKey: "shield-check",
  },
  {
    id: "menu-7",
    label: "Sobre o AMAR",
    description: "Conheça o Projeto AMAR",
    href: "/menu/sobre",
    iconKey: "info",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: "(79) 99999-1000",
    icon: "message-circle",
  },
  {
    label: "Telefone",
    value: "(79) 3333-1000",
    icon: "phone",
  },
  {
    label: "Horário",
    value: "Seg-Sex 08h-17h",
    icon: "clock",
  },
  {
    label: "Endereço",
    value: "Centro, Aracaju - SE",
    icon: "map-pin",
  },
];

export const hotlineNumbers: HotlineNumber[] = [
  {
    number: "180",
    label: "Central de Atendimento à Mulher",
    description: "Orientação, informações e encaminhamentos 24h",
  },
  {
    number: "190",
    label: "Polícia Civil",
    description: "Para denúncias de crimes e emergências jurídicas",
  },
  {
    number: "192",
    label: "SAMU",
    description: "Atendimento médico emergencial",
  },
  {
    number: "Delegacia da Mulher",
    label: "Atendimento Especializado",
    description: "Avenida Hermes Fontes, 300 - Aracaju",
  },
];

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Educação Financeira para Mulheres",
    description: "Gestão de orçamento, poupança e investimentos",
    duration: "8 horas",
    status: "available",
  },
  {
    id: "course-2",
    title: "Marketing Digital para Pequenos Negócios",
    description: "Estratégias de redes sociais, branding e vendas online",
    duration: "12 horas",
    status: "available",
  },
  {
    id: "course-3",
    title: "Liderança e Autoestima",
    description: "Desenvolvimento pessoal e habilidades de liderança",
    duration: "6 horas",
    status: "available",
  },
  {
    id: "course-4",
    title: "Tecnologia e Programação Básica",
    description: "Introdução à lógica de programação e conceitos web",
    duration: "16 horas",
    status: "soon",
  },
  {
    id: "course-5",
    title: "Gestão de Projetos Sociais",
    description: "Planejamento, execução e monitoramento de projetos",
    duration: "10 horas",
    status: "soon",
  },
];

export const entrepreneurshipServices: EntrepreneurshipService[] = [
  {
    id: "entrepreneur-1",
    title: "Consultoria Jurídica",
    description: "Orientação sobre constituição de negócio, contratos e direitos",
    icon: "scale",
  },
  {
    id: "entrepreneur-2",
    title: "Educação Financeira",
    description: "Planejamento financeiro, fluxo de caixa e análise de rentabilidade",
    icon: "trending-up",
  },
  {
    id: "entrepreneur-3",
    title: "Marketing Digital",
    description: "Estratégias de presença online, SEO e publicidade digital",
    icon: "megaphone",
  },
  {
    id: "entrepreneur-4",
    title: "Microcrédito",
    description: "Acesso a linhas de crédito com juros reduzidos para empreendedoras",
    icon: "credit-card",
  },
];

export const assistanceServices: AssistanceService[] = [
  {
    id: "assistance-1",
    title: "Apoio Emergencial",
    description: "Auxílio rápido para situações de vulnerabilidade social",
    icon: "shield-alert",
  },
  {
    id: "assistance-2",
    title: "Encaminhamentos Psicossociais",
    description: "Orientação profissional e acompanhamento psicológico",
    icon: "heart",
  },
  {
    id: "assistance-3",
    title: "Delivery Solidário",
    description: "Entrega de alimentos, itens de higiene e materiais educativos",
    icon: "package",
  },
];

export const termsSections: TermsSection[] = [
  {
    id: "terms-1",
    title: "Termos de Uso",
    content:
      "O Projeto AMAR é uma plataforma digital de suporte e capacitação para mulheres. Ao utilizar este aplicativo, você concorda em respeitar as políticas de uso justo e a legislação aplicável. O conteúdo é fornecido como está, sem garantias.",
  },
  {
    id: "terms-2",
    title: "Privacidade e Proteção de Dados",
    content:
      "Seus dados pessoais são protegidos conforme a Lei Geral de Proteção de Dados (LGPD). Não compartilhamos informações com terceiros sem consentimento. Você pode solicitar acesso ou exclusão de seus dados a qualquer momento.",
  },
  {
    id: "terms-3",
    title: "Responsabilidade",
    content:
      "O AMAR não é responsável por danos diretos ou indiretos decorrentes do uso da plataforma. As informações fornecidas são para orientação; para questões jurídicas, procure um profissional.",
  },
  {
    id: "terms-4",
    title: "Licença de Uso",
    content:
      "Este aplicativo é fornecido sob licença de uso pessoal, não comercial. Você não pode reproduzir, modificar ou distribuir o conteúdo sem autorização.",
  },
];

export const aboutSections: AboutSection[] = [
  {
    id: "about-1",
    title: "Missão",
    content: [
      "Empoderar mulheres através de acesso a direitos, oportunidades e redes de suporte, promovendo sua autonomia econômica, saúde e bem-estar.",
    ],
  },
  {
    id: "about-2",
    title: "Visão",
    content: [
      "Uma sociedade onde todas as mulheres possam exercer seus direitos plenamente, com acesso equitativo a oportunidades de desenvolvimento pessoal, profissional e social.",
    ],
  },
  {
    id: "about-3",
    title: "Pilares",
    content: [
      "Saúde e Bem-Estar: Acesso a informações e serviços de saúde integral",
      "Educação e Capacitação: Oferta de cursos e certificações profissionais",
      "Empreendedorismo: Apoio jurídico, financeiro e de marketing",
      "Segurança e Cidadania: Proteção, denúncia e acompanhamento psicossocial",
      "Comunidade: Fóruns, eventos e redes de participação",
      "Assistência Social: Benefícios, alimentos e suporte logístico",
    ],
  },
  {
    id: "about-4",
    title: "Como Funciona",
    content: [
      "1. Você se registra e completa seu perfil",
      "2. Acessa serviços, cursos e comunidades conforme sua necessidade",
      "3. Participa de eventos, avaliações e acompanhamento contínuo",
      "4. Recebe orientação de profissionais e voluntários capacitados",
      "5. Constrói sua rede de apoio e contribui para a comunidade",
    ],
  },
];

export function getTopicById(id: string): CommunityTopic | undefined {
  return communityTopics.find((t) => t.id === id);
}

export function getThreadsByTopicId(topicId: string): CommunityThread[] {
  return communityThreads[topicId] || [];
}

export function getSurveyById(id: string): Survey | undefined {
  return surveys.find((s) => s.id === id);
}

export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id);
}

export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((m) => m.id === id);
}

export function getMenuItemByHref(href: string): MenuItem | undefined {
  return menuItems.find((m) => m.href === href);
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getEntrepreneurshipServiceById(id: string): EntrepreneurshipService | undefined {
  return entrepreneurshipServices.find((s) => s.id === id);
}

export function getAssistanceServiceById(id: string): AssistanceService | undefined {
  return assistanceServices.find((s) => s.id === id);
}

export function getTermsSectionById(id: string): TermsSection | undefined {
  return termsSections.find((s) => s.id === id);
}

export function getAboutSectionById(id: string): AboutSection | undefined {
  return aboutSections.find((s) => s.id === id);
}
