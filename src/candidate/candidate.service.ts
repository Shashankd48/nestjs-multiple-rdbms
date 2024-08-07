import { Inject, Injectable, Scope } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import dbSource from 'src/common/utils/db-source';
import { DataSource, Repository } from 'typeorm';
import { Candidate } from 'src/common/database-silos/tenant/entities/candidate.entity';

@Injectable({ scope: Scope.REQUEST })
export class CandidateService {
  private readonly candidateRepository: Repository<Candidate>;

  constructor(
    @Inject(dbSource.TENANT)
    private readonly tenantDataSource: DataSource,
  ) {
    this.candidateRepository = this.tenantDataSource.getRepository(Candidate);
    console.log(
      'CandidateService : constructor() injected w/ DataSource for :',
      this.candidateRepository.manager.connection.options.database,
    );
  }

  create(createCandidateDto: CreateCandidateDto) {
    return 'This action adds a new candidate';
  }

  async findAll() {
    return await this.candidateRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} candidate`;
  }

  update(id: number, updateCandidateDto: UpdateCandidateDto) {
    return `This action updates a #${id} candidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
