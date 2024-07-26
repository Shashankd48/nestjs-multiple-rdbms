import { Module, Scope } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { MultiTenancyModule } from 'src/multi-tenancy/multi-tenancy.module';

@Module({
  imports: [MultiTenancyModule.register(Scope.REQUEST)],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
