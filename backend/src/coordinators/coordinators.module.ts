import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { CoordinatorsService } from './coordinators.service';
import { CoordinatorsController } from './coordinators.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [UsersModule],
  providers: [CoordinatorsService, PrismaService],
  controllers: [CoordinatorsController],
})
export class CoordinatorsModule {}
