"use client";

import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
  };

  const socialIcons = [
    { Icon: FaFacebook, link: "#facebook" },
    { Icon: FaLinkedin, link: "#linkedin" },
    { Icon: FaInstagram, link: "#instagram" },
    { Icon: FaYoutube, link: "#youtube" },
    { Icon: FaXTwitter, link: "#x-twitter" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">PCDWEB</div>
          <div className="space-x-6">
            {[
              "Quem Somos",
              "Para Empresas",
              "Para Alunos",
              "Blog",
              "Contato",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="bg-blue-50 py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Profissionais com Deficiência Qualificados
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Integre talentos, aumente a diversidade e atenda suas demandas!
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Quero Saber Mais
          </Button>
        </div>
      </header>

      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre a PCDWEB</h2>
            <p className="text-gray-700 mb-4">
              Transformamos vidas através de formação tecnológica inclusiva e
              humanizada.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Nossos Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {[
                  "Programação",
                  "Atendimento ao Cliente",
                  "Marketing Digital",
                  "Auxiliar Administrativo",
                  "Soft Skills",
                  "Mentorias",
                ].map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "phone", "email"].map((field) => (
              <Input
                key={field}
                name={field}
                placeholder={
                  field === "name"
                    ? "Nome"
                    : field === "phone"
                    ? "Telefone"
                    : "E-mail"
                }
                type={field === "email" ? "email" : "text"}
                required
                onChange={(e) =>
                  setContactForm((prev) => ({
                    ...prev,
                    [field]: e.target.value,
                  }))
                }
              />
            ))}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialIcons.map(({ Icon, link }) => (
              <a key={link} href={link}>
                <Icon className="text-2xl hover:text-blue-200 cursor-pointer" />
              </a>
            ))}
          </div>
          <p>© 2024 PCDweb. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
