"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ChevronUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const courses = [
  {
    title: "Programação Full Stack",
    description:
      "Aprenda a desenvolver aplicações web completas, do backend ao frontend.",
  },
  {
    title: "Formação em Auxiliar Administrativo",
    description:
      "Desenvolva habilidades essenciais para a área administrativa.",
  },
  {
    title: "Excel Avançado + Power BI",
    description: "Domine ferramentas essenciais para análise de dados.",
  },
  {
    title: "Desenvolvimento Web Completo",
    description: "Crie websites profissionais e responsivos.",
  },
  {
    title: "Canva",
    description:
      "Aprenda a criar designs impressionantes mesmo sem experiência.",
  },
  {
    title: "Project + Teams + Asana",
    description:
      "Gerencie projetos com as ferramentas mais utilizadas do mercado.",
  },
  {
    title: "Inglês Instrumental",
    description:
      "Desenvolva habilidades essenciais em inglês para o mercado de trabalho.",
  },
  {
    title: "Atendimento ao Cliente",
    description: "Aprenda as melhores práticas de atendimento ao cliente.",
  },
  {
    title: "Marketing Digital",
    description: "Desenvolva estratégias eficientes de marketing online.",
  },
  {
    title: "Sales Development Representative",
    description: "Torne-se um profissional qualificado em vendas B2B.",
  },
];

const benefits = [
  {
    title: "Atendimento psicológico especializado",
    description:
      "Você merece um espaço inclusivo e acolhedor com profissionais capacitados e treinados para ouvir suas preocupações e te ajudar.",
    icon: "🧠",
  },
  {
    title: "Formação profissional",
    description:
      "Um método de desenvolvimento e acompanhamento adaptado às suas necessidades que te ajudarão a se tornar um profissional de destaque.",
    icon: "📚",
  },
  {
    title: "Atendimento pedagógico especializado",
    description:
      "Aqui você encontra um ambiente inclusivo e totalmente voltado para você, com profissionais experientes na área.",
    icon: "👥",
  },
  {
    title: "Soft skills",
    description:
      "Não basta apenas ter as habilidades técnicas, você precisa ter as soft skills mais importantes para se inserir e proporcionar crescimento no mercado.",
    icon: "🤝",
  },
  {
    title: "Sessão de motivação",
    description:
      "Quem nunca precisou de um incentivo a mais pra conseguir continuar? Na PCDWEB você terá um momento destinado para essa dose extra de motivação.",
    icon: "⭐",
  },
  {
    title: "Transformação da cultura inclusiva",
    description:
      "A inclusão vai além da inserção na empresa. Por isso, ajudamos a criar um ambiente de trabalho acolhedor e acessível.",
    icon: "🌈",
  },
  {
    title: "Coach especializado",
    description:
      "Tenha orientação e suporte especializado para te ajudar a trilhar seu caminho e impulsionar seu crescimento pessoal e profissional.",
    icon: "🎯",
  },
  {
    title: "Inserção facilitada",
    description:
      "Fique tranquilo, pois nós facilitamos a sua entrada no mercado de trabalho rapidamente, com todo o apoio que a PCDWEB oferece.",
    icon: "🚀",
  },
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Desenvolvedora Frontend",
    content:
      "A PCDweb mudou minha vida! Hoje trabalho como desenvolvedora em uma grande empresa.",
    image: "/api/placeholder/100/100",
  },
  {
    name: "João Santos",
    role: "Analista Administrativo",
    content:
      "O suporte da equipe foi fundamental para minha recolocação no mercado.",
    image: "/api/placeholder/100/100",
  },
  {
    name: "Ana Oliveira",
    role: "Marketing Digital",
    content:
      "Os cursos são muito bem estruturados e o atendimento é excepcional!",
    image: "/api/placeholder/100/100",
  },
];

const PCDwebLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top button visibility
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Você está a um clique de transformar sua vida e impulsionar sua
            carreira
          </h1>
          <p className="text-xl mb-8 animate-slide-up">
            Esta é a sua oportunidade de qualificação profissional, recolocação
            no mercado de trabalho e desenvolvimento pessoal.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transform transition hover:scale-105"
          >
            Quero saber mais informações
          </Button>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Desenvolva suas habilidades
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transform transition hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">💻</span>
                Técnicas
              </h3>
              <p>
                Com aulas ao vivo todas as noites, focamos no seu aprendizado de
                acordo com o seu ritmo e suas dificuldades.
              </p>
            </CardContent>
          </Card>
          <Card className="transform transition hover:scale-105 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">🤝</span>
                Comportamentais
              </h3>
              <p>
                Você irá desenvolver habilidades interpessoais com mentorias,
                encontros individuais e conteúdos voltados para o seu mindset e
                a sua performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Courses Section with Accordion */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Cursos personalizados
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {courses.map((course, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {course.title}
                </AccordionTrigger>
                <AccordionContent>{course.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Seus benefícios</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="transform transition hover:scale-105"
              >
                <CardContent className="p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-center">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {testimonial.role}
                  </p>
                  <p className="text-center italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Gostou do nosso projeto?</h2>
          <p className="text-xl mb-8">Então fale com nossa equipe.</p>
          <Button
            size="lg"
            variant="secondary"
            className="transform transition hover:scale-105"
          >
            Quero entrar em contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-6">
            {[Facebook, Linkedin, Instagram, Youtube, Twitter].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="w-6 h-6 transform transition hover:scale-125 cursor-pointer"
                />
              )
            )}
          </div>
          <p className="text-center text-gray-400">
            © 2024 PCDweb. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg transform transition hover:scale-110"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
export default PCDwebLanding;
