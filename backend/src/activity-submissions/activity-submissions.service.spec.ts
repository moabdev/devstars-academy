import { Test, TestingModule } from '@nestjs/testing';
import { ActivitySubmissionsService } from './activity-submissions.service';

describe('ActivitySubmissionsService', () => {
  let service: ActivitySubmissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitySubmissionsService],
    }).compile();

    service = module.get<ActivitySubmissionsService>(ActivitySubmissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
