import { Test, TestingModule } from '@nestjs/testing';
import { MasterDbService } from './master-db.service';

describe('MasterDbService', () => {
  let service: MasterDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterDbService],
    }).compile();

    service = module.get<MasterDbService>(MasterDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
