import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantDbService } from './tenant-db.service';
import { CreateTenantDbDto } from './dto/create-tenant-db.dto';
import { UpdateTenantDbDto } from './dto/update-tenant-db.dto';

@Controller('tenant-db')
export class TenantDbController {
  constructor(private readonly tenantDbService: TenantDbService) {}

  @Post()
  create(@Body() createTenantDbDto: CreateTenantDbDto) {
    return this.tenantDbService.create(createTenantDbDto);
  }

  @Get()
  findAll() {
    return this.tenantDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantDbDto: UpdateTenantDbDto) {
    return this.tenantDbService.update(+id, updateTenantDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantDbService.remove(+id);
  }
}
