import { Test, TestingModule } from '@nestjs/testing';
import { AspectsController } from './aspects.controller';
import { AspectsService } from './aspects.service';

describe('AspectsController', () => {
  let controller: AspectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AspectsController],
      providers: [AspectsService],
    }).compile();

    controller = module.get<AspectsController>(AspectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
