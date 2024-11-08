import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  // Criação de um curso
  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  // Buscar todos os cursos
  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  // Buscar curso por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosService.findOne(+id); // O ID é convertido para número
  }

  // Atualizar dados de um curso
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursosService.update(+id, updateCursoDto);
  }

  // Deletar um curso
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosService.remove(+id);
  }
}
