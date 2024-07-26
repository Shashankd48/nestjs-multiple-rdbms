import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors';

async function bootstrap() {
  dotenv.config();
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [configService.get<string>('LOCAL_DOMAIN') || ''],
    credentials: true,
  });

  app.setGlobalPrefix('v1');

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Demo Backend')
    .setDescription(
      'Multi database and dynamic request based connection with db',
    )
    .setVersion('1.0')
    .addTag('Demo')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // Global response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const port = configService.get<string>('PORT') || '3000';
  await app.listen(port);
  Logger.log(`Services running at PORT ${port}`);
}
bootstrap();
