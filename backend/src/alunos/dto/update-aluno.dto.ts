import { IsString, IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class UpdateAlunoDto {
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  matricula: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  escolaridade: string;

  @IsNotEmpty()
  @IsString()
  rg: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  LinkcomprovanteEndereco: string;

  @IsNotEmpty()
  @IsString()
  LinklaudoMedico: string;

  @IsNotEmpty()
  @IsString()
  LinkBne: string;
}
