import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterDbModule } from './master-db/master-db.module';
import { AppContentDbModule } from './app-content-db/app-content-db.module';
import { TenantDbModule } from './tenant-db/tenant-db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production', '.env.development'],
      isGlobal: true,
      cache: true,
    }),
    MasterDbModule,
    AppContentDbModule,
    TenantDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
