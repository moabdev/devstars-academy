import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

export const CourseComponentList = () => {
  return (
    <div className="mt-4">
      <Accordion type="single" collapsible>
        {/* Encontro 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Encontro 1: Introdução à Engenharia de Software
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Apresentar os fundamentos e a importância
            da Engenharia de Software.
            <ul>
              <li>Definição e objetivos da Engenharia de Software.</li>
              <li>Histórico e evolução da disciplina.</li>
              <li>
                Diferença entre desenvolvimento de software e engenharia de
                software.
              </li>
              <li>
                Ciclo de vida do software (SDLC - Software Development Life
                Cycle).
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Encontro 2: Modelagem de Requisitos com UML
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Ensinar como coletar, documentar e
            gerenciar requisitos de software usando UML.
            <ul>
              <li>Tipos de requisitos: Funcionais e Não-funcionais.</li>
              <li>Introdução à UML e sua importância.</li>
              <li>Diagramas de Casos de Uso para modelagem de requisitos.</li>
              <li>Diagramas de Atividade e Diagramas de Sequência.</li>
              <li>Ferramentas de modelagem UML (Lucidchart, Draw.io).</li>
            </ul>
            <Button></Button>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Encontro 3: Arquitetura de Software com UML
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Apresentar conceitos e práticas de design
            arquitetural utilizando UML.
            <ul>
              <li>Conceito de arquitetura de software.</li>
              <li>Padrões arquiteturais.</li>
              <li>
                Uso de Diagramas de Componentes e Diagramas de Implantação em
                UML.
              </li>
              <li>Ferramentas para modelagem arquitetural com UML.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Encontro 4: Design de Software e Padrões de Projeto com UML
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Ensinar princípios de design de software
            e padrões de projeto utilizando UML.
            <ul>
              <li>Princípios SOLID.</li>
              <li>Padrões de projeto (Design Patterns).</li>
              <li>Design modular e desacoplamento.</li>
              <li>Refatoração de código e melhoria contínua.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Encontro 5: Qualidade de Software e Testes
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Introduzir os conceitos de qualidade e
            práticas de teste de software.
            <ul>
              <li>
                Conceito de qualidade de software e garantia da qualidade (QA).
              </li>
              <li>
                Tipos de testes: Unitários, Integração, Sistema, Aceitação.
              </li>
              <li>Práticas de teste automatizado.</li>
              <li>
                TDD (Test-Driven Development) e BDD (Behavior-Driven
                Development).
              </li>
              <li>Ferramentas de teste.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 6 */}
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Encontro 6: Gerenciamento de Projetos de Software
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Apresentar métodos e ferramentas para
            gerenciar projetos de software.
            <ul>
              <li>
                Introdução ao gerenciamento de projetos: Escopo, Tempo, Custo,
                Qualidade.
              </li>
              <li>Metodologias tradicionais e Metodologias Ágeis.</li>
              <li>
                Planejamento de projetos: Cronogramas, Roadmaps e Backlogs.
              </li>
              <li>Gerenciamento de risco em projetos de software.</li>
              <li>Ferramentas de gerenciamento de projetos (JIRA, Trello).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 7 */}
        <AccordionItem value="item-7">
          <AccordionTrigger>
            Encontro 7: Engenharia de Requisitos Não-Funcionais
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Explorar a engenharia de requisitos
            não-funcionais.
            <ul>
              <li>
                Tipos de requisitos não-funcionais: Performance, Segurança,
                Usabilidade, Manutenibilidade.
              </li>
              <li>Como capturar e documentar requisitos não-funcionais.</li>
              <li>Impacto na arquitetura e design do software.</li>
              <li>Medição e validação de requisitos não-funcionais.</li>
              <li>Exemplos e casos de uso no mundo real.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 8 */}
        <AccordionItem value="item-8">
          <AccordionTrigger>
            Encontro 8: Processos e Metodologias Ágeis
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Detalhar processos ágeis e suas
            aplicações na engenharia de software.
            <ul>
              <li>Manifesto Ágil e seus princípios.</li>
              <li>Frameworks ágeis: Scrum, Kanban.</li>
              <li>
                Papeis em equipes ágeis (Product Owner, Scrum Master, Dev Team).
              </li>
              <li>Planejamento e execução de sprints.</li>
              <li>Integração Contínua e Entrega Contínua (CI/CD).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 9 */}
        <AccordionItem value="item-9">
          <AccordionTrigger>
            Encontro 9: Manutenção e Evolução de Software
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Abordar práticas para a manutenção e
            evolução eficiente do software.
            <ul>
              <li>
                Tipos de manutenção: Corretiva, Adaptativa, Perfectiva,
                Preventiva.
              </li>
              <li>Refatoração de código e práticas de melhoria contínua.</li>
              <li>Técnicas para gerenciamento de legado.</li>
              <li>Documentação de software e sua importância na manutenção.</li>
              <li>
                Ferramentas e práticas para gerenciamento de configuração.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Encontro 10 */}
        <AccordionItem value="item-10">
          <AccordionTrigger>
            Encontro 10: Projeto Final e Tendências em Engenharia de Software
          </AccordionTrigger>
          <AccordionContent>
            <strong>Objetivo:</strong> Concluir o curso com um projeto
            integrador e discutir tendências atuais e futuras na engenharia de
            software.
            <ul>
              <li>Apresentação e avaliação do projeto integrador.</li>
              <li>
                Discussão sobre tendências atuais e futuras na engenharia de
                software (DevOps, AI em software engineering, etc.).
              </li>
              <li>
                Dicas para a carreira: Certificações, Comunidades, e Melhores
                Práticas.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
