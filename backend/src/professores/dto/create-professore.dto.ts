import { IsEmail, IsEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProfessoreDto {
  @IsEmpty()
  @IsString()
  nomeCompleto: string;

  @IsEmail()
  @IsEmpty()
  email: string;

  @IsEmpty()
  @IsString()
  senha: string;

  @IsEmpty()
  @IsString()
  telefone: string;

  @IsEmpty()
  @IsString()
  rg: string;

  @IsEmpty()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsEmpty()
  @IsString()
  disciplina: string;
}
