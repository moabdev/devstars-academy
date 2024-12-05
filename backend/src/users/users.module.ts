import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { CoordinatorsModule } from '../coordinators/coordinators.module';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from '../students/students.module';

@Module({
  // imports: [StudentsModule, TeachersModule, CoordinatorsModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
