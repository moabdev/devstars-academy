import { Module } from '@nestjs/common';
import { ActivitySubmissionsService } from './activity-submissions.service';
import { ActivitySubmissionsController } from './activity-submissions.controller';

@Module({
  controllers: [ActivitySubmissionsController],
  providers: [ActivitySubmissionsService],
})
export class ActivitySubmissionsModule {}
