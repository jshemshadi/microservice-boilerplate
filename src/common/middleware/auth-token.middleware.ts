import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthTokenMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthTokenMiddleware.name);

  use(
    req: Request & { cookies?: { token?: string } },
    res: Response,
    next: NextFunction,
  ) {
    const token = req.cookies?.token;
    this.logger.debug(`Auth token in cookie: ${token ?? 'Not found'}`);
    next();
  }
}
