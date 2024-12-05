import { Controller, Post, Body, Param, Put, Get, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role, User } from '@prisma/client';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @Roles(Role.COORDINATOR) // Apenas Coordenadores podem criar usuários
  @UseGuards(RolesGuard)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @Roles(Role.COORDINATOR, Role.TEACHER) // Coordenadores e Professores podem atualizar usuários
  @UseGuards(RolesGuard)
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Get(':id')
  @Roles(Role.COORDINATOR, Role.TEACHER, Role.STUDENT) // Todos os papéis podem consultar seus dados
  @UseGuards(RolesGuard)
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  @Roles(Role.COORDINATOR) // Apenas Coordenadores podem excluir usuários
  @UseGuards(RolesGuard)
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
