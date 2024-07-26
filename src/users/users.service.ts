import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from 'src/common/database-silos/master/entities';
import { InjectRepository } from '@nestjs/typeorm';
import dbSource from 'src/common/utils/db-source';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, dbSource.MASTER)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(params: FindOneOptions<User>) {
    return await this.userRepository.findOne(params);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
