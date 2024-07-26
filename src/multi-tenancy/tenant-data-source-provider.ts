import { Provider, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import { DataSource } from 'typeorm';

import TenantDataSourceManager from './tenant-data-source-manager';

export const TenantDataSourceProvider: { [key: string]: Provider } = {
  [Scope.DEFAULT]: {
    provide: 'tenant_data_source',
    useFactory: (): null => {
      return null;
    },
  },
  [Scope.REQUEST]: {
    provide: 'tenant_data_source',
    inject: [REQUEST, ConfigService],
    scope: Scope.REQUEST,
    useFactory: async (
      req,
      configService: ConfigService,
    ): Promise<DataSource | null> => {
      console.log('multi-tenancy-provider : useFactory > ');

      // Get MultiTenancyCompanyId from Request object, and use it to retrieve the correct datasource
      const currentCompanyId: number | null = req.CurrentCompanyId;
      if (currentCompanyId) {
        console.log(
          ' - useFactory() - retrieving DS for companyId :',
          currentCompanyId,
        );
        const ds =
          await TenantDataSourceManager.getInstance().getDBDataSource(
            currentCompanyId,
          );
        console.log(' - useFactory() - found DS w/ name :', ds.name);
        return ds;
      }

      return null;
    },
  },
};
