import { Injectable } from '@nestjs/common';
import { CreateMasterDbDto } from './dto/create-master-db.dto';
import { UpdateMasterDbDto } from './dto/update-master-db.dto';

@Injectable()
export class MasterDbService {
  create(createMasterDbDto: CreateMasterDbDto) {
    return 'This action adds a new masterDb';
  }

  findAll() {
    return `This action returns all masterDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterDb`;
  }

  update(id: number, updateMasterDbDto: UpdateMasterDbDto) {
    return `This action updates a #${id} masterDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterDb`;
  }
}
