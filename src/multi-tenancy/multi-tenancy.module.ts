import { DynamicModule, Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TenantDataSourceProvider } from './tenant-data-source-provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantDatabase } from 'src/common/database-silos/master/entities/tenant-database.entity';

/**
 * Dynamic Database Module. Use register(scopeType) to import this module
 */
@Module({})
export class MultiTenancyModule {
  static register(scopeType: Scope): DynamicModule {
    console.log(
      'MultiTenancyModule : register() called for scopetype ',
      scopeType,
    );
    return {
      module: MultiTenancyModule,
      imports: [ConfigModule, TypeOrmModule.forFeature([TenantDatabase])],
      providers: [TenantDataSourceProvider[scopeType]],
      exports: ['tenant_data_source'],
    };
  }
}
