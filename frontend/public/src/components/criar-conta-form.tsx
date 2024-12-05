import Link from "next/link";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function CriarContaForm() {
  return (
    <Card className="mx-auto w-4/12">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Cadastre-se</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Nome Completo</Label>
            <Input
              id="nomeCompleto"
              type="text"
              placeholder="Ana Maria de Andrade"
              required
            />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirmação de Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta?{" "}
            <Link href="/entrar" className="underline">
              Entrar
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
