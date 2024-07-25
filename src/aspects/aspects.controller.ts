import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AspectsService } from './aspects.service';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { successRes } from 'src/common/interceptors';

@Controller('aspects')
export class AspectsController {
  constructor(private readonly aspectsService: AspectsService) {}

  @Post()
  create(@Body() createAspectDto: CreateAspectDto) {
    return this.aspectsService.create(createAspectDto);
  }

  @Get()
  async findAll() {
    const aspects = await this.aspectsService.findAll();
    return successRes(aspects);
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
