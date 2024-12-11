import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const RoleSchema = z.enum(["STUDENT", "TEACHER", "COORDINATOR", "ADMIN"]);
const StatusSchema = z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]);

const userFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().optional(),
  role: RoleSchema,
  profilePicture: z.string().optional(),
  status: StatusSchema.default("ACTIVE"),
});

const CriarUsuarioForm = () => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      role: "STUDENT",
    },
  });

  function onSubmit(values: z.infer<typeof userFormSchema>) {
    console.log("Form submitted:", values);
    toast({
      title: "User Created",
      description: `User ${values.firstName} ${values.lastName} has been registered`,
    });
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 rounded-2xl bg-white p-8 shadow-lg"
          >
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Cadastrar Usuário</h2>
              <p className="mt-2 text-sm text-gray-600">Preencha os dados para criar uma nova conta</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Nome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        {...field}
                        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Sobrenome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        {...field}
                        className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500">
                    Digite seu e-mail
                  </FormDescription>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Senha</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="******" 
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500">
                    A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas,
                    minúsculas, números e caracteres especiais
                  </FormDescription>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(81) 98888-8888" 
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500">
                    Opcional: Seu número de telefone para contato
                  </FormDescription>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Perfil</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-lg border-gray-300">
                          <SelectValue placeholder="Selecione um perfil" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="STUDENT">Estudante</SelectItem>
                        <SelectItem value="TEACHER">Professor</SelectItem>
                        <SelectItem value="COORDINATOR">Coordenador</SelectItem>
                        <SelectItem value="ADMIN">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Status da Conta</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-lg border-gray-300">
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ACTIVE">Ativo</SelectItem>
                        <SelectItem value="INACTIVE">Inativo</SelectItem>
                        <SelectItem value="SUSPENDED">Suspenso</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between pt-6">
              <Button 
                type="button" 
                className="rounded-lg bg-gray-100 px-8 py-2 text-gray-700 hover:bg-gray-200"
              >
                Voltar
              </Button>
              <Button 
                type="submit" 
                className="rounded-lg bg-indigo-600 px-8 py-2 text-white hover:bg-indigo-700"
              >
                Enviar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CriarUsuarioForm;