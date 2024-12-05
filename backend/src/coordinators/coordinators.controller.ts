import { Controller, Post, Body } from '@nestjs/common';
import { CoordinatorsService } from './coordinators.service';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';

@Controller('coordinators')
export class CoordinatorsController {
  constructor(private readonly coordinatorService: CoordinatorsService) {}

  @Post()
  async create(@Body() createCoordinatorDto: CreateCoordinatorDto) {
    return this.coordinatorService.create(createCoordinatorDto);
  }
}
