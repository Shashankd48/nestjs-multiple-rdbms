import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseLogService } from './database-log.service';

describe('DatabaseLogService', () => {
  let service: DatabaseLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseLogService],
    }).compile();

    service = module.get<DatabaseLogService>(DatabaseLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
