import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/common/database-silos/master/entities/user.entity';
import dbSource from 'src/common/utils/db-source';

@Module({
  imports: [TypeOrmModule.forFeature([User], dbSource.MASTER)],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
