import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      return false; // Se não houver token, negue o acesso
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded; // Atribui o usuário decodificado ao request
      return true;
    } catch (error) {
      return false; // Se o token não for válido, negue o acesso
    }
  }

  private extractTokenFromHeader(request: any): string | null {
    const token = request.headers['authorization'];
    return token ? token.replace('Bearer ', '') : null; // Remove o 'Bearer' do token
  }
}
