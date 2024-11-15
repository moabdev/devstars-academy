"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nomeComleto: z.string().min(50, {
    message: "Nome Completo deve ter ao menos 50 caracteres",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  senha: z.string().min(8, {
    message: "Senha deve ter ao menos 8 caracteres.",
  }),
  telefone: z.string().min(10, {
    message: "Telefone deve ter ao menos 10 caracteres.",
  }),
  rg: z.string().min(9, {
    message: "RG deve ter ao menos 9 caracteres.",
  }),
  cpf: z.string().min(11, {
    message: "CPF deve ter ao menos 11 caracteres.",
  }),
  endereco: z.string().min(10, {
    message: "Endereço deve ter ao menos 10 caracteres.",
  }),
  disciplina: z.string().min(4, {
    message: "Disciplina deve ter ao menos 4 caracteres.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeComleto: "",
      email: "",
      senha: "",
      telefone: "",
      rg: "",
      cpf: "",
      endereco: "",
      disciplina: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
}
