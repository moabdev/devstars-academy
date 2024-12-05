import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService, // Dependência para acessar o UserService
  ) {}

  async login(loginDto: LoginDto) {
    // 1. Buscar o usuário pelo e-mail
    const user = await this.userService.findByEmail(loginDto.email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // 2. Verificar a senha (essa parte pode ser ajustada dependendo do método de hash)
    const isPasswordValid = await this.comparePasswords(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Senha inválida');
    }

    // 3. Gerar o token JWT
    const payload = { email: user.email, role: user.role, id: user.id }; // Payload pode ser ajustado
    const token = this.jwtService.sign(payload);

    return { access_token: token }; // Retorna o token para o cliente
  }

  // Função de comparação de senha (ajuste conforme necessário)
  private async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    // Comparação usando bcrypt ou outro método
    return plainPassword === hashedPassword; // Apenas como exemplo, ajuste para sua lógica de comparação real
  }
}
