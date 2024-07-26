import { Module, OnModuleInit } from '@nestjs/common';
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
import { DatabaseLogService } from './database-log/database-log.service';
import dbSource from './common/utils/db-source';
import { CompanyService } from './company/company.service';
import TenantDataSourceManager from './multi-tenancy/tenant-data-source-manager';
import { DataSource, Repository } from 'typeorm';
import { MultiTenancyModule } from './multi-tenancy/multi-tenancy.module';
import { TanantDatabaseModule } from './tanant-database/tanant-database.module';

@Module({
  imports: [
    Repository,
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production', '.env.development'],
      isGlobal: true,
      cache: true,
    }),
    // Master database config (connect to the master database)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: dbSource.MASTER,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        masterDBConfig(configService),
    }),

    // Application content database config (connect to the ac database)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: dbSource.APP_CONTENT,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        appContentDBConfig(configService),
    }),

    CompanyModule,

    CandidateModule,

    AspectsModule,

    UsersModule,

    MultiTenancyModule,

    TanantDatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DatabaseLogService,
    {
      provide: DataSource,
      useClass: TenantDataSourceManager,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly companyService: CompanyService) {}

  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ApiLoggerMiddleware).forRoutes('/v1/*');
  //   consumer.apply(MultiTenancyRequestModifierMiddleware).forRoutes('*');
  //   // consumer.apply(LogMiddleware).forRoutes('*');
  // }
  async onModuleInit() {
    console.log('AppModule.onModuleInit() - Start');

    try {
      // Connect to Master database so we can
      //  - Read Tenant-DB data
      const dataSources = await this.companyService.findAllTanantDb();
      console.log(
        'AppModule.onModuleInit() - discovered dataSources',
        dataSources,
      );

      //  - Initialize Globally Cached TenantDataSourceManager
      //  - Seed the GCTDSM w/ the retrieved tenant connections
      TenantDataSourceManager.getInstance();
      TenantDataSourceManager.Populate({ companies: dataSources });

      console.log(
        'The following tenant datasources are registered on application startup:',
      );
      TenantDataSourceManager.Report();
    } catch (error) {
      console.error('Error checking database connection:', error);
    }

    console.log('AppModule.onModuleInit() - End');
  }
}
