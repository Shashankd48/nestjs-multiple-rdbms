import { Module, Scope } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { MultiTenancyModule } from 'src/multi-tenancy/multi-tenancy.module';
import { AspectsModule } from 'src/aspects/aspects.module';

@Module({
  imports: [MultiTenancyModule.register(Scope.REQUEST), AspectsModule],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
