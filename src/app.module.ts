import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeaderResolver, I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import { PrismaModule } from 'prisma/prisma.module';

import { AuthTokenMiddleware } from './common/middleware/auth-token.middleware';
import { envSchema } from './config/env.schema';
import { validateWithZod } from './config/zod-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateWithZod(envSchema),
    }),
    PrismaModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: HeaderResolver, options: ['accept-language'] }],
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthTokenMiddleware).forRoutes('*');
  }
}
