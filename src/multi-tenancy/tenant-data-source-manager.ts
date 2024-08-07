import { DataSource } from 'typeorm';
import { DatabaseType } from 'node_modules/typeorm/browser/driver/types/DatabaseType';
import {
  Company,
  TenantDatabase,
} from 'src/common/database-silos/master/entities';

export default class TenantDataSourceManager {
  private static instance: TenantDataSourceManager;

  private dataSources: Record<number, DataSource>;

  public constructor() {
    this.dataSources = {};
  }

  public static getInstance(): TenantDataSourceManager {
    if (!TenantDataSourceManager.instance) {
      console.log(
        'DataSourceManager : getInstance() created new instance for use.',
      );
      TenantDataSourceManager.instance = new TenantDataSourceManager();
    } else {
      console.log(
        'DataSourceManager : getInstance() re-using existing instance.',
      );
    }

    return TenantDataSourceManager.instance;
  }

  public static Populate({ companies }: { companies: Company[] }) {
    if (!companies || companies.length == 0) {
      throw 'ArgumentException: tenantDatabases cannot be null or empty';
    }

    for (var i = 0; i < companies.length; i++) {
      TenantDataSourceManager.AddDataSource(
        companies[i].id,
        companies[i].tenantDatabase,
      );
    }
  }

  private static AddDataSource(
    companyId: number,
    tenantDatabase: TenantDatabase,
  ) {
    let databaseType: DatabaseType;
    switch (tenantDatabase.serverType.toLowerCase()) {
      case 'mssql':
        databaseType = 'mssql';
        break;
      default:
        databaseType = 'mysql';
    }

    const tenantDataSource = new DataSource({
      name: tenantDatabase.databaseName,
      type: databaseType,
      host: tenantDatabase.host,
      port: tenantDatabase.port,
      username: tenantDatabase.databaseUser,
      password: tenantDatabase.databasePassword,
      database: tenantDatabase.databaseName,
      synchronize: true,
      //  Include only entities defined in the 'tenant' database-silo
      entities: [
        'dist/**/common/database-silos/tenant/entities/*.entity.{ts,js}',
      ],
    });

    TenantDataSourceManager.instance.dataSources[companyId] = tenantDataSource;
  }

  public static Report() {
    for (const [key, value] of Object.entries(
      TenantDataSourceManager.instance.dataSources,
    )) {
      console.log(' - CompanyId ', key, ' uses database ', value.options.name);
    }
  }

  async getDBDataSource(companyId: number): Promise<DataSource> {
    if (!this.dataSources[companyId]) {
      throw 'No datasource loaded for CompanyId ' + companyId.toString();
    }

    const dataSource = this.dataSources[companyId];
    return Promise.resolve(
      dataSource.isInitialized ? dataSource : dataSource.initialize(),
    );
  }
}
