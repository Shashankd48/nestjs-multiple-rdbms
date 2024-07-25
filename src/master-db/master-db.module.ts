import { Module } from '@nestjs/common';
import { MasterDbService } from './master-db.service';
import { MasterDbController } from './master-db.controller';

@Module({
  controllers: [MasterDbController],
  providers: [MasterDbService],
})
export class MasterDbModule {}
