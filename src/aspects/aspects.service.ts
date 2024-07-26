import { Injectable } from '@nestjs/common';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aspect } from 'src/common/database-silos/app-content/entities/aspect.entity';
import { FindOneOptions, Repository } from 'typeorm';
import dbSource from 'src/common/utils/db-source';

@Injectable()
export class AspectsService {
  constructor(
    @InjectRepository(Aspect, dbSource.APP_CONTENT)
    private readonly aspectRepository: Repository<Aspect>,
  ) {}

  create(createAspectDto: CreateAspectDto) {
    return 'This action adds a new aspect';
  }

  async findAll() {
    return await this.aspectRepository.find();
  }

  async findOne(params: FindOneOptions<Aspect>) {
    return await this.aspectRepository.findOne(params);
  }

  update(id: number, updateAspectDto: UpdateAspectDto) {
    return `This action updates a #${id} aspect`;
  }

  remove(id: number) {
    return `This action removes a #${id} aspect`;
  }
}
