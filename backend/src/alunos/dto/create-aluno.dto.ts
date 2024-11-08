import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @IsNotEmpty()
  @IsString()
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
