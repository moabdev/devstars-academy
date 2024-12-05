import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class StudentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Cria o usuário principal
    const user = await this.userService.create(createUserDto);

    // Se o role do usuário for 'STUDENT', cria um Student
    if (createUserDto.role === 'STUDENT') {
      await this.prisma.student.create({
        data: {
          userId: user.id,
        },
      });
    }

    return user;
  }
}
