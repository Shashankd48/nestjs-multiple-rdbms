import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { successRes } from 'src/common/interceptors';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards';
import { AspectsService } from 'src/aspects/aspects.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Candidate')
@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly aspectService: AspectsService,
  ) {}

  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  async findAll() {
    const candidates = await this.candidateService.findAll();

    let temp = [];

    for (const cand of candidates) {
      const aspect = await this.aspectService.findOne({
        where: { id: cand.aspect },
      });

      if (aspect) temp.push({ ...cand, aspect });
    }
    return successRes(temp);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateDto: UpdateCandidateDto,
  ) {
    return this.candidateService.update(+id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(+id);
  }
}
