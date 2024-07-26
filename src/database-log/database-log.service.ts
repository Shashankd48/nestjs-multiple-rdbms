import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import dbSource from 'src/common/utils/db-source';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseLogService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseLogService.name);

  constructor(
    @InjectDataSource(dbSource.MASTER)
    private readonly masterDBDataSource: DataSource,

    @InjectDataSource(dbSource.APP_CONTENT)
    private readonly appContentDBDataSource: DataSource,
  ) {}

  async onModuleInit() {
    this.logConnectionStatus(this.masterDBDataSource, dbSource.MASTER);
    this.logConnectionStatus(this.appContentDBDataSource, dbSource.APP_CONTENT);
  }

  private logConnectionStatus(dataSource: DataSource, connectionName: string) {
    if (dataSource.isInitialized) {
      this.logger.log(
        `Connected to the ${connectionName} database successfully.`,
      );
    } else {
      this.logger.error(`Failed to connect to the ${connectionName} database.`);
    }
  }
}
