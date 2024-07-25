import { Test, TestingModule } from '@nestjs/testing';
import { AspectsService } from './aspects.service';

describe('AspectsService', () => {
  let service: AspectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AspectsService],
    }).compile();

    service = module.get<AspectsService>(AspectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
