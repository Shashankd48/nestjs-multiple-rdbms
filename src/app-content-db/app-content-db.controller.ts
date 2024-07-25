import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppContentDbService } from './app-content-db.service';
import { CreateAppContentDbDto } from './dto/create-app-content-db.dto';
import { UpdateAppContentDbDto } from './dto/update-app-content-db.dto';

@Controller('app-content-db')
export class AppContentDbController {
  constructor(private readonly appContentDbService: AppContentDbService) {}

  @Post()
  create(@Body() createAppContentDbDto: CreateAppContentDbDto) {
    return this.appContentDbService.create(createAppContentDbDto);
  }

  @Get()
  findAll() {
    return this.appContentDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appContentDbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppContentDbDto: UpdateAppContentDbDto) {
    return this.appContentDbService.update(+id, updateAppContentDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appContentDbService.remove(+id);
  }
}
