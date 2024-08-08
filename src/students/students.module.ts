import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/common/database-silos/master/entities/student.entity';
import dbSource from 'src/common/utils/db-source';

@Module({
  imports: [TypeOrmModule.forFeature([Student], dbSource.MASTER)],
  providers: [StudentsResolver, StudentsService],
})
export class StudentsModule {}
