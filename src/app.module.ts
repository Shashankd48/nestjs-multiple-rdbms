import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { CandidateModule } from './candidate/candidate.module';
import { AspectsModule } from './aspects/aspects.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production', '.env.development'],
      isGlobal: true,
      cache: true,
    }),
    CompanyModule,
    CandidateModule,

    AspectsModule,

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
