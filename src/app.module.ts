import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { CandidateModule } from './candidate/candidate.module';
import { AspectsModule } from './aspects/aspects.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  appContentDBConfig,
  masterDBConfig,
} from './common/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production', '.env.development'],
      isGlobal: true,
      cache: true,
    }),
    // Master database config (connect to the master database)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'masterDB',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        masterDBConfig(configService),
    }),

    // Application content database config (connect to the ac database)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: 'appContent',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        appContentDBConfig(configService),
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
