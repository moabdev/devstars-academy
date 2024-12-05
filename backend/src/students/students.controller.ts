import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.studentService.create(createUserDto);
  }
}
