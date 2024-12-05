import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [UsersModule],
  providers: [TeachersService, PrismaService],
  controllers: [TeachersController],
})
export class TeachersModule {}
