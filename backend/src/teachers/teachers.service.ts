import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createUserDto: CreateTeacherDto) {
    // Cria o usuário principal
    const user = await this.userService.create(createUserDto);

    // Se o role do usuário for 'TEACHER', cria um Teacher
    if (createUserDto.role === 'TEACHER') {
      await this.prisma.teacher.create({
        data: {
          userId: user.id,
        },
      });
    }

    return user;
  }
}
