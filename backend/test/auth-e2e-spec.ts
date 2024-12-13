// test/auth.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UserRole } from '@prisma/client';
import { PrismaService } from '../src/prisma/prisma.service';

describe('Authentication (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  // Credenciais de teste para cada tipo de usuário
  const testUsers = {
    student: {
      email: 'student@test.com',
      password: 'StudentPass123!',
      firstName: 'Student',
      lastName: 'User',
      role: UserRole.STUDENT
    },
    teacher: {
      email: 'teacher@test.com',
      password: 'TeacherPass123!',
      firstName: 'Teacher',
      lastName: 'User',
      role: UserRole.TEACHER
    },
    coordinator: {
      email: 'coordinator@test.com',
      password: 'CoordinatorPass123!',
      firstName: 'Coordinator',
      lastName: 'User',
      role: UserRole.COORDINATOR
    }
  };

  // Tokens de autenticação para cada usuário
  const tokens = {
    student: null,
    teacher: null,
    coordinator: null
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));

    prisma = app.get(PrismaService);
    await app.init();
  });

  // Limpar banco de dados antes dos testes
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  // Registrar usuários para cada tipo de role
  describe('User Registration', () => {
    Object.entries(testUsers).forEach(([role, userData]) => {
      it(`should register a ${role}`, async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/register')
          .send(userData)
          .expect(201);

        expect(response.body.user.role).toBe(userData.role);
        expect(response.body.access_token).toBeDefined();
        
        // Armazenar token para testes posteriores
        tokens[role] = response.body.access_token;
      });
    });
  });

  // Testar login para cada tipo de usuário
  describe('User Login', () => {
    beforeEach(async () => {
      // Registrar usuários antes de fazer login
      for (const userData of Object.values(testUsers)) {
        await request(app.getHttpServer())
          .post('/auth/register')
          .send(userData);
      }
    });

    Object.entries(testUsers).forEach(([role, userData]) => {
      it(`should login a ${role}`, async () => {
        const response = await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: userData.email,
            password: userData.password
          })
          .expect(201);

        expect(response.body.user.role).toBe(userData.role);
        expect(response.body.access_token).toBeDefined();
      });
    });
  });

  // Testar acesso a rotas protegidas
  describe('Protected Routes', () => {
    beforeEach(async () => {
      // Registrar e fazer login para cada usuário
      for (const [role, userData] of Object.entries(testUsers)) {
        const response = await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: userData.email,
            password: userData.password
          });
        
        tokens[role] = response.body.access_token;
      }
    });

    it('should allow coordinator to list users', async () => {
      const response = await request(app.getHttpServer())
        .get('/auth/users')
        .set('Authorization', `Bearer ${tokens.coordinator}`)
        .expect(200);

      expect(response.body.users).toBeDefined();
    });

    it('should prevent teacher from listing users', async () => {
      await request(app.getHttpServer())
        .get('/auth/users')
        .set('Authorization', `Bearer ${tokens.teacher}`)
        .expect(403);
    });

    it('should prevent student from listing users', async () => {
      await request(app.getHttpServer())
        .get('/auth/users')
        .set('Authorization', `Bearer ${tokens.student}`)
        .expect(403);
    });

    it('should allow all authenticated users to update profile', async () => {
      for (const [role, token] of Object.entries(tokens)) {
        const response = await request(app.getHttpServer())
          .patch('/auth/profile')
          .set('Authorization', `Bearer ${token}`)
          .send({ phone: '123456789' })
          .expect(200);

        expect(response.body.phone).toBe('123456789');
      }
    });
  });

  afterAll(async () => {
    await app.close();
  });
});