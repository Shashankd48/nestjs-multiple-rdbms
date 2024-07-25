import { Module } from '@nestjs/common';
import { TenantDbService } from './tenant-db.service';
import { TenantDbController } from './tenant-db.controller';

@Module({
  controllers: [TenantDbController],
  providers: [TenantDbService],
})
export class TenantDbModule {}
