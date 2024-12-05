import { Test, TestingModule } from '@nestjs/testing';
import { ActivitySubmissionsController } from './activity-submissions.controller';
import { ActivitySubmissionsService } from './activity-submissions.service';

describe('ActivitySubmissionsController', () => {
  let controller: ActivitySubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitySubmissionsController],
      providers: [ActivitySubmissionsService],
    }).compile();

    controller = module.get<ActivitySubmissionsController>(ActivitySubmissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
