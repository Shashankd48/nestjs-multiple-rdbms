import { Test, TestingModule } from '@nestjs/testing';
import { AppContentDbController } from './app-content-db.controller';
import { AppContentDbService } from './app-content-db.service';

describe('AppContentDbController', () => {
  let controller: AppContentDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppContentDbController],
      providers: [AppContentDbService],
    }).compile();

    controller = module.get<AppContentDbController>(AppContentDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
