"use client";
import { useState } from "react";
import { StudentCard } from "@/components/student/StudentCard";
import Layout from "@/components/template/Layout";
import { STUDENT_MOCK_DATA } from "@/data";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ArrowDownUp,
  Filter,
  RefreshCw,
  SortAsc,
  SortDesc,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | undefined>(
    undefined
  );
  const [sortBy, setSortBy] = useState<"name" | "email" | "status">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Função de filtro de alunos
  const filteredStudents = STUDENT_MOCK_DATA.filter((student) => {
    const matchesSearch =
      student.user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === undefined ||
      student.user.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case "name":
        comparison = `${a.user.firstName} ${a.user.lastName}`.localeCompare(
          `${b.user.firstName} ${b.user.lastName}`
        );
        break;
      case "email":
        comparison = a.user.email.localeCompare(b.user.email);
        break;
      case "status":
        comparison = a.user.status.localeCompare(b.user.status);
        break;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  // Função para redefinir todos os filtros
  const resetFilters = () => {
    setSearchTerm("");
    setFilterStatus(undefined);
    setSortBy("name");
    setSortOrder("asc");
  };

  return (
    <Layout className="px-16 pb-16">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Barra de Pesquisa */}
            <Input
              placeholder="Pesquisar aluno por nome ou email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:max-w-xs"
            />

            {/* Filtro de Status */}
            <Select
              value={filterStatus}
              onValueChange={(value) =>
                setFilterStatus(value === "todos" ? undefined : value)
              }
            >
              <SelectTrigger className="w-full md:max-w-xs">
                <SelectValue placeholder="Filtrar por Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
                <SelectItem value="suspenso">Suspenso</SelectItem>
              </SelectContent>
            </Select>

            {/* Dropdown de Ordenação */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:max-w-xs">
                  <ArrowDownUp className="mr-2 h-4 w-4" />
                  Ordenar por
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("name");
                    setSortOrder(
                      sortBy === "name" && sortOrder === "asc" ? "desc" : "asc"
                    );
                  }}
                >
                  {sortBy === "name" &&
                    (sortOrder === "asc" ? (
                      <SortAsc className="mr-2 h-4 w-4" />
                    ) : (
                      <SortDesc className="mr-2 h-4 w-4" />
                    ))}
                  Nome
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("email");
                    setSortOrder(
                      sortBy === "email" && sortOrder === "asc" ? "desc" : "asc"
                    );
                  }}
                >
                  {sortBy === "email" &&
                    (sortOrder === "asc" ? (
                      <SortAsc className="mr-2 h-4 w-4" />
                    ) : (
                      <SortDesc className="mr-2 h-4 w-4" />
                    ))}
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("status");
                    setSortOrder(
                      sortBy === "status" && sortOrder === "asc"
                        ? "desc"
                        : "asc"
                    );
                  }}
                >
                  {sortBy === "status" &&
                    (sortOrder === "asc" ? (
                      <SortAsc className="mr-2 h-4 w-4" />
                    ) : (
                      <SortDesc className="mr-2 h-4 w-4" />
                    ))}
                  Status
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Botão de Redefinir */}
            <Button
              variant="outline"
              onClick={resetFilters}
              className="w-full md:max-w-xs"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Redefinir Filtros
            </Button>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground mb-4">
            {filteredStudents.length} aluno(s) encontrado(s)
          </p>
          {(searchTerm || filterStatus || sortBy !== "name") && (
            <div className="flex gap-2 mb-4">
              {searchTerm && (
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Busca: {searchTerm}
                </span>
              )}
              {filterStatus && (
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Status: {filterStatus}
                </span>
              )}
              {sortBy !== "name" && (
                <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                  Ordenado por: {sortBy}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="grid auto-rows-min gap-6 md:grid-cols-4">
          {filteredStudents.map((student) => (
            <StudentCard key={student.user.email} student={student} />
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredStudents.length === 0 && (
          <div className="text-center text-muted-foreground py-10">
            Nenhum aluno encontrado
          </div>
        )}
      </div>
    </Layout>
  );
}
