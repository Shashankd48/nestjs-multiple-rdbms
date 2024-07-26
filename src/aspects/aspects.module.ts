import { Module } from '@nestjs/common';
import { AspectsService } from './aspects.service';
import { AspectsController } from './aspects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aspect } from 'src/common/database-silos/app-content/entities/aspect.entity';
import dbSource from 'src/common/utils/db-source';

@Module({
  imports: [TypeOrmModule.forFeature([Aspect], dbSource.APP_CONTENT)],
  controllers: [AspectsController],
  providers: [AspectsService],
  exports: [AspectsService],
})
export class AspectsModule {}
