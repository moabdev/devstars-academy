"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu } from "lucide-react";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LoginForm = () => (
    <div className="space-y-4 w-full">
      <Input type="email" placeholder="Email" className="w-full" />
      <Input type="password" placeholder="Senha" className="w-full" />
      <Button className="w-full">Entrar</Button>
    </div>
  );

  const RegisterForm = () => (
    <div className="space-y-4 w-full">
      <Input type="text" placeholder="Nome completo" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Input type="password" placeholder="Confirmar senha" />
      <Button className="w-full">Cadastrar</Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                PCDweb EAD
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Quem Somos
              </Button>
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Para Empresas
              </Button>
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Para Alunos
              </Button>

              {/* Login Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Acesse sua conta</DialogTitle>
                    <DialogDescription>
                      Entre com suas credenciais ou crie uma nova conta
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="register">Cadastro</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <LoginForm />
                    </TabsContent>
                    <TabsContent value="register">
                      <RegisterForm />
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu
                      className={isScrolled ? "text-blue-600" : "text-white"}
                    />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button variant="ghost">Quem Somos</Button>
                    <Button variant="ghost">Para Empresas</Button>
                    <Button variant="ghost">Para Alunos</Button>
                    <Button variant="outline">Login</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 animate-slide-up">
              Formação Profissional Inclusiva e Humanizada
            </h2>
            <p className="text-xl mb-8 animate-slide-up delay-150">
              Transformando vidas e impulsionando carreiras através da
              tecnologia
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-semibold animate-bounce">
              Comece Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cursos Técnicos",
                description:
                  "Programação, Marketing Digital, Atendimento ao Cliente e muito mais.",
              },
              {
                title: "Desenvolvimento Pessoal",
                description:
                  "Soft skills, mentorias individuais e acompanhamento personalizado.",
              },
              {
                title: "Inserção no Mercado",
                description:
                  "Conexão direta com empresas e suporte na colocação profissional.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Ficou Interessado?
              </CardTitle>
              <CardDescription className="text-center">
                Deixe seu contato para saber todos os detalhes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nome"
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Benefícios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Para Alunos",
                items: [
                  "Formação técnica de qualidade",
                  "Desenvolvimento pessoal",
                  "Acompanhamento individual",
                  "Rápida inserção no mercado",
                ],
              },
              {
                title: "Para Empresas",
                items: [
                  "Profissionais qualificados",
                  "Suporte na integração",
                  "Desenvolvimento sustentável",
                  "Ambiente mais inclusivo",
                ],
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Transformando vidas através da educação inclusiva e tecnologia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">contato@pcdweb.com.br</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="rounded-l-lg"
                />
                <Button className="bg-blue-600 rounded-r-lg hover:bg-blue-700">
                  Assinar
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 PCDweb. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
