import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitySubmissionsService } from './activity-submissions.service';
import { CreateActivitySubmissionDto } from './dto/create-activity-submission.dto';
import { UpdateActivitySubmissionDto } from './dto/update-activity-submission.dto';

@Controller('activity-submissions')
export class ActivitySubmissionsController {
  constructor(private readonly activitySubmissionsService: ActivitySubmissionsService) {}

  @Post()
  create(@Body() createActivitySubmissionDto: CreateActivitySubmissionDto) {
    return this.activitySubmissionsService.create(createActivitySubmissionDto);
  }

  @Get()
  findAll() {
    return this.activitySubmissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitySubmissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitySubmissionDto: UpdateActivitySubmissionDto) {
    return this.activitySubmissionsService.update(+id, updateActivitySubmissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitySubmissionsService.remove(+id);
  }
}
