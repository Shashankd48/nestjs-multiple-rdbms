import { Injectable } from '@nestjs/common';
import { CreateTanantDatabaseDto } from './dto/create-tanant-database.dto';
import { UpdateTanantDatabaseDto } from './dto/update-tanant-database.dto';

@Injectable()
export class TanantDatabaseService {
  create(createTanantDatabaseDto: CreateTanantDatabaseDto) {
    return 'This action adds a new tanantDatabase';
  }

  findAll() {
    return `This action returns all tanantDatabase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tanantDatabase`;
  }

  update(id: number, updateTanantDatabaseDto: UpdateTanantDatabaseDto) {
    return `This action updates a #${id} tanantDatabase`;
  }

  remove(id: number) {
    return `This action removes a #${id} tanantDatabase`;
  }
}
