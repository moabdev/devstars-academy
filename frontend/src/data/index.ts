export const COURSE_MEETINGS = [
  {
    title: "Introdução à Engenharia de Software",
    objective:
      "Apresentar os fundamentos e a importância da Engenharia de Software.",
    topics: [
      "Definição e objetivos da Engenharia de Software",
      "Histórico e evolução da disciplina",
      "Diferença entre desenvolvimento e engenharia de software",
      "Ciclo de vida do software (SDLC)",
    ],
  },
  {
    title: "Requisitos de Software e Análise de Necessidades",
    objective:
      "Compreender técnicas de levantamento e especificação de requisitos.",
    topics: [
      "Tipos de requisitos (funcionais e não funcionais)",
      "Técnicas de elicitação de requisitos",
      "Documento de especificação de requisitos",
      "Gerenciamento de mudanças de requisitos",
    ],
  },
  {
    title: "Modelagem e Design de Software",
    objective:
      "Explorar princípios de design e modelagem de sistemas de software.",
    topics: [
      "Princípios de design SOLID",
      "Padrões de projeto (Design Patterns)",
      "Diagramas UML",
      "Arquitetura de software",
    ],
  },
  {
    title: "Desenvolvimento de Software Ágil",
    objective:
      "Introduzir metodologias ágeis e práticas modernas de desenvolvimento.",
    topics: [
      "Manifesto Ágil",
      "Metodologias Scrum e Kanban",
      "Gestão de projetos ágeis",
      "Práticas de desenvolvimento ágil",
    ],
  },
  {
    title: "Programação e Qualidade de Código",
    objective: "Técnicas para desenvolvimento de código de alta qualidade.",
    topics: [
      "Boas práticas de programação",
      "Princípios de clean code",
      "Revisão de código (Code Review)",
      "Refatoração",
    ],
  },
  {
    title: "Testes de Software",
    objective: "Compreender estratégias e técnicas de teste de software.",
    topics: [
      "Tipos de testes (unitário, integração, sistemas)",
      "Automação de testes",
      "Estratégias de teste",
      "Ferramentas de teste",
    ],
  },
  {
    title: "Desenvolvimento Web e Arquitetura de Aplicações",
    objective: "Explorar tecnologias e arquiteturas para desenvolvimento web.",
    topics: [
      "Arquiteturas de aplicações web",
      "Frontend e backend",
      "Microsserviços",
      "Desenvolvimento full-stack",
    ],
  },
  {
    title: "Gestão de Configuração e Controle de Versão",
    objective: "Aprender sobre controle de versão e integração contínua.",
    topics: [
      "Git e GitHub",
      "Branching e merging",
      "Integração contínua (CI)",
      "Entrega contínua (CD)",
    ],
  },
  {
    title: "Segurança e Qualidade de Software",
    objective:
      "Abordar aspectos críticos de segurança no desenvolvimento de software.",
    topics: [
      "Principais vulnerabilidades de software",
      "Práticas de desenvolvimento seguro",
      "Testes de segurança",
      "Gestão de riscos",
    ],
  },
  {
    title: "Projeto Final e Tendências em Engenharia de Software",
    objective:
      "Concluir o curso com um projeto integrador e discutir tendências atuais e futuras.",
    topics: [
      "Apresentação do projeto integrador",
      "Tendências em engenharia de software",
      "Dicas para desenvolvimento profissional",
    ],
  },
];

import { StudentData } from "@/components/student/StudentCard";
import { BrainCircuit, PlayCircle, Send, Settings2, User2, UserCircleIcon, WholeWordIcon } from "lucide-react";

export const STUDENT_MOCK_DATA: StudentData[] = [
  {
    user: {
      firstName: "João",
      lastName: "Silva",
      email: "joao.silva@exemplo.com",
      phone: "(11) 98765-4321",
      profilePicture: undefined,
      status: "ACTIVE",
      createdAt: new Date("2023-01-15"),
    },
    courseEnrollments: [
      {
        course: {
          name: "Engenharia de Software",
          startDate: new Date("2023-02-01"),
          status: "ONGOING",
        },
      },
    ],
    academicHistory: {
      totalCredits: 120,
      completedCourses: 10,
      currentSemester: 4,
    },
    tickets: [
      {
        id: 1,
        title: "Solicitação de Documentação",
        status: "OPEN",
        createdAt: new Date("2024-01-10"),
      },
    ],
    documents: [
      {
        id: 1,
        name: "Histórico Escolar",
        type: "ACADEMIC",
        uploadedAt: new Date("2023-12-15"),
      },
    ],
  },
];

import {  
  Map,
  FileText,
  HelpCircle,
  BarChart2,
  MessageCircle,
  Clipboard,
  Briefcase
} from "lucide-react";

export const menuData = {
  user: {
    name: "Moab Macena",
    email: "macenamoab@gmail.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    // Aluno (Student) Menu
    {
      title: "Alunos",
      url: "/dashboard/aluno",
      icon: User2,
      items: [
        {
          title: "Meus Cursos",
          url: "/dashboard/aluno/cursos",
          description: "Atividades, notas e rendimento"
        },
        {
          title: "Status Acadêmico",
          url: "/dashboard/aluno/status",
          description: "Histórico e controle de aprovação"
        },
        {
          title: "Materiais Extras",
          url: "/dashboard/aluno/materiais",
          description: "Ementas e conteúdos programáticos"
        },
        {
          title: "Configurações",
          url: "/dashboard/aluno/configuracoes",
          description: "Preferências de acessibilidade"
        }
      ]
    },
    // Professor Menu
    {
      title: "Professores",
      url: "/dashboard/professor",
      icon: UserCircleIcon,
      items: [
        {
          title: "Gestão Acadêmica",
          url: "/dashboard/professor/gestao",
          description: "Cadastro de aulas e atividades"
        },
        {
          title: "Desempenho Alunos",
          url: "/dashboard/professor/desempenho",
          description: "Notas e frequências"
        },
        {
          title: "Materiais",
          url: "/dashboard/professor/materiais",
          description: "Upload de conteúdos"
        },
        {
          title: "Sistema de Chamados",
          url: "/dashboard/professor/chamados",
          description: "Responder dúvidas de alunos"
        }
      ]
    },
    // Coordenação (Coordination) Menu
    {
      title: "Coordenação",
      url: "/dashboard/coordenacao",
      icon: BarChart2,
      items: [
        {
          title: "Gerenciamento de Usuários",
          url: "/dashboard/coordenacao/usuarios",
          description: "Cadastro de alunos e professores"
        },
        {
          title: "Gestão Acadêmica",
          url: "/dashboard/coordenacao/academica",
          description: "Controle de notas e frequência"
        },
        {
          title: "Relatórios",
          url: "/dashboard/coordenacao/relatorios",
          description: "Estatísticas e documentos"
        },
        {
          title: "Sistema de Chamados",
          url: "/dashboard/coordenacao/chamados",
          description: "Gerenciar comunicações"
        }
      ]
    },
    // Configurações Gerais
    {
      title: "Configurações",
      url: "/configuracoes",
      icon: Settings2,
      items: [
        {
          title: "Perfil",
          url: "/configuracoes/perfil",
          description: "Editar informações pessoais"
        },
        {
          title: "Acessibilidade",
          url: "/configuracoes/acessibilidade",
          description: "Configurações de contraste e leitor de tela"
        },
        {
          title: "Notificações",
          url: "/configuracoes/notificacoes",
          description: "Preferências de comunicação"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Empregabilidade",
      url: "/empregabilidade",
      icon: Briefcase,
      description: "Oportunidades de estágio e carreira"
    },
    {
      name: "Inteligência Emocional",
      url: "/inteligencia-emocional",
      icon: BrainCircuit,
      description: "Apoio e aconselhamento"
    },
    {
      name: "Fórum Geral",
      url: "/forum",
      icon: MessageCircle,
      description: "Discussões e interações"
    }
  ]
};