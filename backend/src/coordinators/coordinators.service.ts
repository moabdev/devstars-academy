import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';

@Injectable()
export class CoordinatorsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createUserDto: CreateCoordinatorDto) {
    // Cria o usuário principal
    const user = await this.userService.create(createUserDto);

    // Se o role do usuário for 'COORDINATOR', cria um Coordinator
    if (createUserDto.role === 'COORDINATOR') {
      await this.prisma.coordinator.create({
        data: {
          userId: user.id,
        },
      });
    }

    return user;
  }
}
