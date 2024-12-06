export const COURSE_MEETINGS = [
  {
    title: "Introdução à Engenharia de Software",
    objective: "Apresentar os fundamentos e a importância da Engenharia de Software.",
    topics: [
      "Definição e objetivos da Engenharia de Software",
      "Histórico e evolução da disciplina",
      "Diferença entre desenvolvimento e engenharia de software",
      "Ciclo de vida do software (SDLC)"
    ]
  },
  {
    title: "Requisitos de Software e Análise de Necessidades",
    objective: "Compreender técnicas de levantamento e especificação de requisitos.",
    topics: [
      "Tipos de requisitos (funcionais e não funcionais)",
      "Técnicas de elicitação de requisitos",
      "Documento de especificação de requisitos",
      "Gerenciamento de mudanças de requisitos"
    ]
  },
  {
    title: "Modelagem e Design de Software",
    objective: "Explorar princípios de design e modelagem de sistemas de software.",
    topics: [
      "Princípios de design SOLID",
      "Padrões de projeto (Design Patterns)",
      "Diagramas UML",
      "Arquitetura de software"
    ]
  },
  {
    title: "Desenvolvimento de Software Ágil",
    objective: "Introduzir metodologias ágeis e práticas modernas de desenvolvimento.",
    topics: [
      "Manifesto Ágil",
      "Metodologias Scrum e Kanban",
      "Gestão de projetos ágeis",
      "Práticas de desenvolvimento ágil"
    ]
  },
  {
    title: "Programação e Qualidade de Código",
    objective: "Técnicas para desenvolvimento de código de alta qualidade.",
    topics: [
      "Boas práticas de programação",
      "Princípios de clean code",
      "Revisão de código (Code Review)",
      "Refatoração"
    ]
  },
  {
    title: "Testes de Software",
    objective: "Compreender estratégias e técnicas de teste de software.",
    topics: [
      "Tipos de testes (unitário, integração, sistemas)",
      "Automação de testes",
      "Estratégias de teste",
      "Ferramentas de teste"
    ]
  },
  {
    title: "Desenvolvimento Web e Arquitetura de Aplicações",
    objective: "Explorar tecnologias e arquiteturas para desenvolvimento web.",
    topics: [
      "Arquiteturas de aplicações web",
      "Frontend e backend",
      "Microsserviços",
      "Desenvolvimento full-stack"
    ]
  },
  {
    title: "Gestão de Configuração e Controle de Versão",
    objective: "Aprender sobre controle de versão e integração contínua.",
    topics: [
      "Git e GitHub",
      "Branching e merging",
      "Integração contínua (CI)",
      "Entrega contínua (CD)"
    ]
  },
  {
    title: "Segurança e Qualidade de Software",
    objective: "Abordar aspectos críticos de segurança no desenvolvimento de software.",
    topics: [
      "Principais vulnerabilidades de software",
      "Práticas de desenvolvimento seguro",
      "Testes de segurança",
      "Gestão de riscos"
    ]
  },
  {
    title: "Projeto Final e Tendências em Engenharia de Software",
    objective: "Concluir o curso com um projeto integrador e discutir tendências atuais e futuras.",
    topics: [
      "Apresentação do projeto integrador",
      "Tendências em engenharia de software",
      "Dicas para desenvolvimento profissional"
    ]
  }
];

import { StudentData } from '@/components/students/StudentCard';

export const STUDENT_MOCK_DATA: StudentData[] = [
  {
    user: {
      firstName: 'João',
      lastName: 'Silva',
      email: 'joao.silva@exemplo.com',
      phone: '(11) 98765-4321',
      profilePicture: undefined,
      status: 'ACTIVE',
      createdAt: new Date('2023-01-15')
    },
    courseEnrollments: [
      {
        course: {
          name: 'Engenharia de Software',
          startDate: new Date('2023-02-01'),
          status: 'ONGOING'
        }
      }
    ],
    academicHistory: {
      totalCredits: 120,
      completedCourses: 10,
      currentSemester: 4
    },
    tickets: [
      {
        id: 1,
        title: 'Solicitação de Documentação',
        status: 'OPEN',
        createdAt: new Date('2024-01-10')
      }
    ],
    documents: [
      {
        id: 1,
        name: 'Histórico Escolar',
        type: 'ACADEMIC',
        uploadedAt: new Date('2023-12-15')
      }
    ]
  },
];