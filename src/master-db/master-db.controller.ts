import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterDbService } from './master-db.service';
import { CreateMasterDbDto } from './dto/create-master-db.dto';
import { UpdateMasterDbDto } from './dto/update-master-db.dto';

@Controller('master-db')
export class MasterDbController {
  constructor(private readonly masterDbService: MasterDbService) {}

  @Post()
  create(@Body() createMasterDbDto: CreateMasterDbDto) {
    return this.masterDbService.create(createMasterDbDto);
  }

  @Get()
  findAll() {
    return this.masterDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterDbDto: UpdateMasterDbDto) {
    return this.masterDbService.update(+id, updateMasterDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterDbService.remove(+id);
  }
}
