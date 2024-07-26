import { Module } from '@nestjs/common';
import { TanantDatabaseService } from './tanant-database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantDatabase } from 'src/common/database-silos/master/entities';
import dbSource from 'src/common/utils/db-source';

@Module({
  imports: [TypeOrmModule.forFeature([TenantDatabase], dbSource.MASTER)],
  providers: [TanantDatabaseService],
})
export class TanantDatabaseModule {}
