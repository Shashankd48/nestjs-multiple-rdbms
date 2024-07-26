import { Test, TestingModule } from '@nestjs/testing';
import { TanantDatabaseService } from './tanant-database.service';

describe('TanantDatabaseService', () => {
  let service: TanantDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TanantDatabaseService],
    }).compile();

    service = module.get<TanantDatabaseService>(TanantDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
