import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AspectsService } from './aspects.service';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';

@Controller('aspects')
export class AspectsController {
  constructor(private readonly aspectsService: AspectsService) {}

  @Post()
  create(@Body() createAspectDto: CreateAspectDto) {
    return this.aspectsService.create(createAspectDto);
  }

  @Get()
  findAll() {
    return this.aspectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aspectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspectDto: UpdateAspectDto) {
    return this.aspectsService.update(+id, updateAspectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aspectsService.remove(+id);
  }
}
