import { Injectable } from '@nestjs/common';
import { CreateAppContentDbDto } from './dto/create-app-content-db.dto';
import { UpdateAppContentDbDto } from './dto/update-app-content-db.dto';

@Injectable()
export class AppContentDbService {
  create(createAppContentDbDto: CreateAppContentDbDto) {
    return 'This action adds a new appContentDb';
  }

  findAll() {
    return `This action returns all appContentDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appContentDb`;
  }

  update(id: number, updateAppContentDbDto: UpdateAppContentDbDto) {
    return `This action updates a #${id} appContentDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} appContentDb`;
  }
}
