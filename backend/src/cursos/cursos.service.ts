import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service'; // PrismaService para interagir com o banco de dados

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  // Criar um novo curso
  async create(dados: CreateCursoDto) {
    return this.prisma.curso.create({
      data: dados,
    });
  }

  // Buscar todos os cursos
  async findAll() {
    return this.prisma.curso.findMany();
  }

  // Buscar um curso por ID
  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
    });
  }

  // Atualizar um curso existente
  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id },
      data: updateCursoDto,
    });
  }

  // Deletar um curso
  async remove(id: number) {
    return this.prisma.curso.delete({
      where: { id },
    });
  }
}
