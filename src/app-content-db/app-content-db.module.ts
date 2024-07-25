import { Module } from '@nestjs/common';
import { AppContentDbService } from './app-content-db.service';
import { AppContentDbController } from './app-content-db.controller';

@Module({
  controllers: [AppContentDbController],
  providers: [AppContentDbService],
})
export class AppContentDbModule {}
