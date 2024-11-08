import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService) {}

  async create(dados: CreateAlunoDto) {
    return this.prisma.aluno.create({
      data: dados,
    });
  }

  async findAll() {
    return this.prisma.aluno.findMany();
  }

  async findOne(id: number) {
    return this.prisma.aluno.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdateAlunoDto) {
    return this.prisma.aluno.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.aluno.delete({
      where: {
        id: id,
      },
    });
  }
}
