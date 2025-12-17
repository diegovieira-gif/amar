export type Pillar = {
	id: string;
	title: string;
	description: string;
	iconKey: string;
};

export type Service = {
	id: string;
	slug: string;
	title: string;
	description: string;
	pillarId: string;
	featured: boolean;
	iconKey: string;
	modality: string;
	howItWorks: string;
	whenToUse: string;
	contact: string;
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

export const modalityOrder: string[] = [
	"Orientação e Informação",
	"Atendimento e Encaminhamento",
	"Rede de Apoio",
	"Cursos e Capacitação",
	"Serviços Digitais",
	"Avaliação e Feedback",
];

export const pillars: Pillar[] = [
	{
		id: "seguranca",
		title: "Segurança e Proteção",
		description: "Rede de proteção, direitos e apoio",
		iconKey: "shield",
	},
	{
		id: "denuncia",
		title: "Denúncia e Resposta",
		description: "Canais seguros e acompanhamento",
		iconKey: "alert",
	},
	{
		id: "empreenda",
		title: "Empreenda",
		description: "Consultoria, crédito e marketing",
		iconKey: "briefcase",
	},
	{
		id: "cursos",
		title: "Cursos e Capacitação",
		description: "Formação, carreira e certificações",
		iconKey: "book",
	},
	{
		id: "comunidade",
		title: "Comunidade",
		description: "Grupos, eventos e fóruns",
		iconKey: "users",
	},
	{
		id: "avaliacao",
		title: "Avaliação e Feedback",
		description: "Avalie e sugira melhorias",
		iconKey: "star",
	},
];

export const services: Service[] = [
	{
		id: "service-1",
		slug: "rede-de-apoio",
		title: "Rede de Apoio",
		description: "Acesso a profissionais e voluntárias para orientação contínua",
		pillarId: "seguranca",
		featured: true,
		iconKey: "heart-hands",
		modality: "Rede de Apoio",
		howItWorks: "Solicite ajuda através do app, conecte-se com orientadoras especializadas e receba suporte semanal.",
		whenToUse: "Quando precisa de apoio emocional e orientação",
		contact: "Rede de Apoio: (79) 99999-2001",
	},
	{
		id: "service-2",
		slug: "delegacia-da-mulher",
		title: "Delegacia da Mulher",
		description: "Informações e encaminhamentos para atendimento especializado",
		pillarId: "seguranca",
		featured: false,
		iconKey: "map-pin",
		modality: "Atendimento e Encaminhamento",
		howItWorks: "Acesse o mapa de delegacias, horários de atendimento e saiba como registrar um boletim de ocorrência.",
		whenToUse: "Quando precisa registrar ocorrência ou denúncia formal",
		contact: "Delegacia da Mulher: Avenida Hermes Fontes, 300",
	},
	{
		id: "service-3",
		slug: "lei-maria-da-penha",
		title: "Lei Maria da Penha",
		description: "Orientações sobre direitos e proteção contra violência doméstica",
		pillarId: "seguranca",
		featured: false,
		iconKey: "scale",
		modality: "Orientação e Informação",
		howItWorks: "Saiba quais são seus direitos, como solicitar medidas protetivas e acesse modelos de documentos.",
		whenToUse: "Quando está sofrendo violência doméstica",
		contact: "Orientação Jurídica: (79) 99999-2002",
	},
	{
		id: "service-4",
		slug: "canal-180",
		title: "Canal 180 – Central da Mulher",
		description: "Atendimento 24h para orientação, encaminhamentos e denúncias",
		pillarId: "denuncia",
		featured: true,
		iconKey: "phone",
		modality: "Atendimento e Encaminhamento",
		howItWorks: "Ligue 180 de qualquer telefone, gratuitamente, converse com orientadora e receba encaminhamentos.",
		whenToUse: "Para denunciar ou buscar orientação imediata",
		contact: "Central da Mulher: 180 (24h)",
	},
	{
		id: "service-5",
		slug: "registro-de-denuncia",
		title: "Registro de Denúncia",
		description: "Plataforma segura para registrar denúncias com anonimato garantido",
		pillarId: "denuncia",
		featured: false,
		iconKey: "lock",
		modality: "Serviços Digitais",
		howItWorks: "Preencha formulário anônimo na plataforma. Dados criptografados. Equipe especializada investiga.",
		whenToUse: "Quando quer denunciar com sigilo total",
		contact: "Denúncias Seguras: via app ou site",
	},
	{
		id: "service-6",
		slug: "acompanhamento-de-caso",
		title: "Acompanhamento de Caso",
		description: "Monitoramento e apoio contínuo após uma denúncia",
		pillarId: "denuncia",
		featured: false,
		iconKey: "heart",
		modality: "Rede de Apoio",
		howItWorks: "Após denúncia, receba atendimento psicossocial, orientação jurídica e atualizações do caso.",
		whenToUse: "Para acompanhar sua denúncia e receber proteção",
		contact: "Apoio Contínuo: (79) 99999-2003",
	},
	{
		id: "service-7",
		slug: "consultoria-empresa",
		title: "Consultoria",
		description: "Orientação especializada para abrir e formalizar seu negócio",
		pillarId: "empreenda",
		featured: true,
		iconKey: "briefcase",
		modality: "Orientação e Informação",
		howItWorks: "Agende consultoria, apresente sua ideia. Receba orientação sobre documentação, finanças e marketing.",
		whenToUse: "Quando quer iniciar um negócio",
		contact: "Consultoria: (79) 99999-3001",
	},
	{
		id: "service-8",
		slug: "formalizacao-negocio",
		title: "Formalização",
		description: "Apoio completo para registrar sua empresa com segurança jurídica",
		pillarId: "empreenda",
		featured: false,
		iconKey: "document",
		modality: "Atendimento e Encaminhamento",
		howItWorks: "Receba orientação sobre MEI, CNPJ, documentação fiscal e aberturas de contas bancárias.",
		whenToUse: "Para legalizar seu negócio",
		contact: "Formalização: (79) 99999-3002",
	},
	{
		id: "service-9",
		slug: "microcredito",
		title: "Microcrédito",
		description: "Linhas de crédito com juros reduzidos para empreendedoras",
		pillarId: "empreenda",
		featured: false,
		iconKey: "credit-card",
		modality: "Serviços Digitais",
		howItWorks: "Inscreva-se, apresente seu projeto. Análise rápida, sem burocracia. Liberação em até 15 dias.",
		whenToUse: "Quando precisa de capital para investir",
		contact: "Financiamento: (79) 99999-3003",
	},
	{
		id: "service-10",
		slug: "marketing-digital",
		title: "Marketing Digital",
		description: "Estratégias para vender online e aumentar presença nas redes sociais",
		pillarId: "empreenda",
		featured: true,
		iconKey: "megaphone",
		modality: "Serviços Digitais",
		howItWorks: "Receba orientação sobre redes sociais, publicidade online e estratégias de vendas digitais.",
		whenToUse: "Para divulgar e vender seu produto ou serviço",
		contact: "Marketing: (79) 99999-3004",
	},
	{
		id: "service-11",
		slug: "consultoria-profissional",
		title: "Consultoria Profissional",
		description: "Orientação para carreira, recolocação e desenvolvimento profissional",
		pillarId: "cursos",
		featured: true,
		iconKey: "target",
		modality: "Orientação e Informação",
		howItWorks: "Converse com orientador de carreiras. Receba dicas de entrevista, montagem de CV e oportunidades.",
		whenToUse: "Quando busca recolocação ou desenvolvimento profissional",
		contact: "Orientação de Carreira: (79) 99999-4001",
	},
	{
		id: "service-12",
		slug: "educacao-financeira",
		title: "Educação Financeira",
		description: "Cursos sobre gestão de dinheiro, poupança e investimentos",
		pillarId: "cursos",
		featured: false,
		iconKey: "trending-up",
		modality: "Cursos e Capacitação",
		howItWorks: "Participe de aulas online gratuitas. Aprenda sobre orçamento, economias e planejamento financeiro.",
		whenToUse: "Para organizar suas finanças pessoais",
		contact: "Cursos Financeiros: (79) 99999-4002",
	},
	{
		id: "service-13",
		slug: "empreendedorismo-curso",
		title: "Empreendedorismo",
		description: "Curso prático sobre iniciativa empresarial e inovação",
		pillarId: "cursos",
		featured: false,
		iconKey: "rocket",
		modality: "Cursos e Capacitação",
		howItWorks: "Participe de módulos online com exercícios práticos. Receba certificado ao final.",
		whenToUse: "Para aprender fundamentos de negócios",
		contact: "Cursos: (79) 99999-4003",
	},
	{
		id: "service-14",
		slug: "grupos-locais",
		title: "Grupos Locais",
		description: "Encontros presenciais de mulheres por região e interesse",
		pillarId: "comunidade",
		featured: true,
		iconKey: "map-pin",
		modality: "Rede de Apoio",
		howItWorks: "Veja grupos da sua região, inscreva-se. Participe de reuniões e eventos comunitários.",
		whenToUse: "Para conhecer outras mulheres e trocar experiências",
		contact: "Comunidade Local: via app",
	},
	{
		id: "service-15",
		slug: "eventos-encontros",
		title: "Eventos e Encontros",
		description: "Workshops, palestras e encontros com especialistas e rede",
		pillarId: "comunidade",
		featured: false,
		iconKey: "calendar",
		modality: "Rede de Apoio",
		howItWorks: "Veja agenda de eventos, inscreva-se gratuitamente, participe presencialmente ou online.",
		whenToUse: "Para aprender e participar de atividades comunitárias",
		contact: "Eventos: veja no app",
	},
	{
		id: "service-16",
		slug: "foruns-tematicos",
		title: "Fóruns Temáticos",
		description: "Discussões online sobre temas de interesse: direitos, saúde, negócios",
		pillarId: "comunidade",
		featured: false,
		iconKey: "chat",
		modality: "Serviços Digitais",
		howItWorks: "Participe de discussões por tema, faça perguntas, compartilhe experiências. Facilitadores moderadores.",
		whenToUse: "Para trocar conhecimento e tirar dúvidas",
		contact: "Fóruns: via app",
	},
	{
		id: "service-17",
		slug: "avaliar-atendimento",
		title: "Avaliar Atendimento",
		description: "Compartilhe sua experiência com serviços e atendimento AMAR",
		pillarId: "avaliacao",
		featured: true,
		iconKey: "star",
		modality: "Avaliação e Feedback",
		howItWorks: "Após usar um serviço, receba convite para avaliar. Sua opinião ajuda a melhorar.",
		whenToUse: "Para dar feedback sobre sua experiência",
		contact: "Avaliações: (79) 99999-5001",
	},
	{
		id: "service-18",
		slug: "feedback-servicos",
		title: "Feedback de Serviços",
		description: "Envie sugestões e críticas sobre nossos programas",
		pillarId: "avaliacao",
		featured: false,
		iconKey: "message",
		modality: "Avaliação e Feedback",
		howItWorks: "Preencha formulário com sugestões. Sua opinião é importante para melhorias contínuas.",
		whenToUse: "Para sugerir melhorias",
		contact: "Sugestões: (79) 99999-5002",
	},
];

export const communityTopics: CommunityTopic[] = [
	{
		id: "topic-1",
		title: "Direitos da Mulher Trabalhadora",
		description: "Discussões sobre direitos laborais, assédio e equidade salarial",
		pillar: "seguranca",
		messagesCount: 23,
		lastActivity: "Hoje às 14:30",
	},
	{
		id: "topic-2",
		title: "Maternidade e Apoio Social",
		description: "Compartilhamento de experiências sobre programas de apoio e benefícios",
		pillar: "comunidade",
		messagesCount: 17,
		lastActivity: "Ontem às 09:15",
	},
	{
		id: "topic-3",
		title: "Empreendedorismo Feminino",
		description: "Networking, dicas de negócios e histórias de sucesso",
		pillar: "empreenda",
		messagesCount: 31,
		lastActivity: "Hoje às 11:45",
	},
	{
		id: "topic-4",
		title: "Saúde Mental e Bem-Estar",
		description: "Cuidado emocional, dicas de autocuidado e recursos psicológicos",
		pillar: "cursos",
		messagesCount: 42,
		lastActivity: "Hoje às 16:20",
	},
	{
		id: "topic-5",
		title: "Segurança e Prevenção",
		description: "Dicas, recursos e conscientização sobre prevenção e proteção",
		pillar: "seguranca",
		messagesCount: 18,
		lastActivity: "2 dias atrás",
	},
	{
		id: "topic-6",
		title: "Capacitação Profissional",
		description: "Compartilhamento de cursos, certificações e oportunidades de aprendizado",
		pillar: "cursos",
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
		pillar: "avaliacao",
		respondents: 234,
		status: "active",
	},
	{
		id: "survey-2",
		title: "Que tipo de curso você gostaria de fazer?",
		description: "Ajude-nos a definir a próxima oferta de capacitação",
		pillar: "cursos",
		respondents: 156,
		status: "active",
	},
	{
		id: "survey-3",
		title: "Satisfação com atendimento psicossocial",
		description: "Sua avaliação é muito importante para nós",
		pillar: "seguranca",
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
		pillar: "empreenda",
	},
	{
		id: "event-2",
		title: "Palestra: Direitos Reprodutivos",
		description: "Conheça seus direitos e os recursos de saúde disponíveis",
		date: "28 de dezembro de 2025",
		time: "10:00",
		location: "Auditório Secretaria da Mulher",
		capacity: 50,
		pillar: "seguranca",
	},
	{
		id: "event-3",
		title: "Curso: Segurança Pessoal e Prevenção",
		description: "Técnicas práticas de proteção e orientações de segurança",
		date: "29 de dezembro de 2025",
		time: "16:00",
		location: "Sala de Prática - Bairro Industrial",
		capacity: 20,
		pillar: "seguranca",
	},
	{
		id: "event-4",
		title: "Encontro: Histórias de Sucesso",
		description: "Mulheres empreendedoras compartilham suas jornadas",
		date: "02 de janeiro de 2026",
		time: "19:00",
		location: "Sala de Conferências",
		capacity: 40,
		pillar: "empreenda",
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
			"Segurança e Proteção: Rede de proteção, direitos e apoio",
			"Denúncia e Resposta: Canais seguros e acompanhamento",
			"Empreenda: Apoio jurídico, financeiro e marketing",
			"Cursos e Capacitação: Formação e certificações profissionais",
			"Comunidade: Fóruns, eventos e redes de participação",
			"Avaliação e Feedback: Espaço para sugestões e melhoria",
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

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillarId: string): Service[] {
	return services.filter((s) => s.pillarId === pillarId);
}

export function getServicesByCategory(categoryId: string): Service[] {
	return services.filter((s) => s.pillarId === categoryId);
}

export function getFeaturedServices(): Service[] {
	return services.filter((s) => s.featured);
}

export function getPillarById(id: string): Pillar | undefined {
	return pillars.find((p) => p.id === id);
}

export function groupServicesByModality(list: Service[]): { modality: string; services: Service[] }[] {
	const grouped = new Map<string, Service[]>();

	list.forEach((service) => {
		const current = grouped.get(service.modality) || [];
		grouped.set(service.modality, [...current, service]);
	});

	return modalityOrder
		.map((modality) => ({ modality, services: grouped.get(modality) || [] }))
		.filter((entry) => entry.services.length > 0);
}

