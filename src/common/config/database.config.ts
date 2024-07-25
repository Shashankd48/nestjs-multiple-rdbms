import { ConfigService } from '@nestjs/config';

export const masterDBConfig = async (
  configService: ConfigService,
): Promise<any> => {
  return {
    type: configService.get<string>('MASTER_DATABASE_TYPE'),
    host: configService.get<string>('MASTER_DATABASE_HOST'),
    port: configService.get<number>('MASTER_DATABASE_PORT'),
    username: configService.get<string>('MASTER_DATABASE_USERNAME'),
    password: configService.get<string>('MASTER_DATABASE_PASSWORD'),
    database: configService.get<string>('MASTER_DATABASE_NAME'),
    //  Include only entities defined in the 'master' database-silo
    entities: [
      'dist/**/common/database-silos/master/entities/*.entity.{ts,js}',
    ],
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
  };
};

export const appContentDBConfig = async (
  configService: ConfigService,
): Promise<any> => {
  return {
    type: configService.get<string>('AC_DATABASE_TYPE'),
    host: configService.get<string>('AC_DATABASE_HOST'),
    port: configService.get<number>('AC_DATABASE_PORT'),
    username: configService.get<string>('AC_DATABASE_USERNAME'),
    password: configService.get<string>('AC_DATABASE_PASSWORD'),
    database: configService.get<string>('AC_DATABASE_NAME'),
    //  Include only entities defined in the 'master' database-silo
    entities: [
      'dist/**/common/database-silos/app-content/entities/*.entity.{ts,js}',
    ],
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
  };
};
