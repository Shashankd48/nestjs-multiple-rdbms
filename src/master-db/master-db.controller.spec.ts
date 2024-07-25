import { Test, TestingModule } from '@nestjs/testing';
import { MasterDbController } from './master-db.controller';
import { MasterDbService } from './master-db.service';

describe('MasterDbController', () => {
  let controller: MasterDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterDbController],
      providers: [MasterDbService],
    }).compile();

    controller = module.get<MasterDbController>(MasterDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
