import { Test, TestingModule } from '@nestjs/testing';
import { TenantDbController } from './tenant-db.controller';
import { TenantDbService } from './tenant-db.service';

describe('TenantDbController', () => {
  let controller: TenantDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantDbController],
      providers: [TenantDbService],
    }).compile();

    controller = module.get<TenantDbController>(TenantDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
