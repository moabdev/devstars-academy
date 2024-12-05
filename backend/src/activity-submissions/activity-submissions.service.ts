import { Injectable } from '@nestjs/common';
import { CreateActivitySubmissionDto } from './dto/create-activity-submission.dto';
import { UpdateActivitySubmissionDto } from './dto/update-activity-submission.dto';

@Injectable()
export class ActivitySubmissionsService {
  create(createActivitySubmissionDto: CreateActivitySubmissionDto) {
    return 'This action adds a new activitySubmission';
  }

  findAll() {
    return `This action returns all activitySubmissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activitySubmission`;
  }

  update(id: number, updateActivitySubmissionDto: UpdateActivitySubmissionDto) {
    return `This action updates a #${id} activitySubmission`;
  }

  remove(id: number) {
    return `This action removes a #${id} activitySubmission`;
  }
}
