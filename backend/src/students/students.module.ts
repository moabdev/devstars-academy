import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsersModule } from '../users/users.module';
import { StudentsController } from './students.controller';

@Module({
  imports: [UsersModule],
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService],
})
export class StudentsModule {}
