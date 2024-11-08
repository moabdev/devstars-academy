import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { CursosModule } from './cursos/cursos.module';
import { AulasModule } from './aulas/aulas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AlunosModule, ProfessoresModule, CursosModule, AulasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
