import { Body, Injectable } from '@nestjs/common';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessoresService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() dados: CreateProfessoreDto) {
    return this.prisma.professor.create({ data: dados });
  }

  async findAll() {
    return this.prisma.professor.findMany();
  }

  async findOne(id: number) {
    return this.prisma.professor.findUnique({ where: { id } });
  }

  async update(id: number, dados: UpdateProfessoreDto) {
    return this.prisma.professor.update({ where: { id }, data: dados });
  }

  async remove(id: number) {
    return this.prisma.professor.delete({ where: { id } });
  }
}
