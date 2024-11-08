import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  cargaHoraria: string;

  @IsString()
  @IsNotEmpty()
  gradeCurricular: string;

  @IsDateString()
  dataInicio: Date;

  @IsDateString()
  dataFim: Date;
}
