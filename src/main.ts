import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  // CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Microservice Boilerplate')
    .setDescription('The microservice boilerplate API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('api', app, document);
  }

  // Server
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT');
  if (!port) throw new Error('PORT is not defined');

  await app.listen(port);
  console.log(`Server running on port ${port}`);
};

bootstrap().catch((err) => {
  console.error('❌ Error during app bootstrap:', err);
  process.exit(1);
});
