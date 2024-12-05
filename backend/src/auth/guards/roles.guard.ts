import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from './auth.guard'; // Importando o JwtAuthGuard
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    if (!roles) {
      return true; // Se não houver roles, o usuário pode acessar
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // O usuário validado no JWT

    return roles.some(role => user.role === role); // Verifica se o usuário tem a role necessária
  }
}
