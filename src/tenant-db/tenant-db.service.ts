import { Injectable } from '@nestjs/common';
import { CreateTenantDbDto } from './dto/create-tenant-db.dto';
import { UpdateTenantDbDto } from './dto/update-tenant-db.dto';

@Injectable()
export class TenantDbService {
  create(createTenantDbDto: CreateTenantDbDto) {
    return 'This action adds a new tenantDb';
  }

  findAll() {
    return `This action returns all tenantDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenantDb`;
  }

  update(id: number, updateTenantDbDto: UpdateTenantDbDto) {
    return `This action updates a #${id} tenantDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenantDb`;
  }
}
