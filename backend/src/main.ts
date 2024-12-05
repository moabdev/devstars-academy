import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definindo o prefixo global para todos os endpoints
  app.setGlobalPrefix('api'); // Todos os endpoints agora começarão com /api

  // Habilitando CORS (opcional, se necessário para seu projeto)
  app.enableCors();

  // Configuração global de validação para garantir que os DTOs sejam validados
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não definidas no DTO
      forbidNonWhitelisted: true, // Lança erro caso haja propriedades não definidas no DTO
      transform: true, // Converte dados automaticamente para os tipos definidos
    }),
  );

  // Configuração do Swagger (Documentação da API)
  const config = new DocumentBuilder()
    .setTitle('API do Sistema de Gerenciamento')
    .setDescription(
      'A API para gerenciamento de alunos, professores e coordenadores.',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('students')
    .addTag('teachers')
    .addTag('coordinators')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
