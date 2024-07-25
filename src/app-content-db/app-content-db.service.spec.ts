import { Test, TestingModule } from '@nestjs/testing';
import { AppContentDbService } from './app-content-db.service';

describe('AppContentDbService', () => {
  let service: AppContentDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppContentDbService],
    }).compile();

    service = module.get<AppContentDbService>(AppContentDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
