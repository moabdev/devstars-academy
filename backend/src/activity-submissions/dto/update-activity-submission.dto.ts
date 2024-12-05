import { PartialType } from '@nestjs/mapped-types';
import { CreateActivitySubmissionDto } from './create-activity-submission.dto';

export class UpdateActivitySubmissionDto extends PartialType(CreateActivitySubmissionDto) {}
