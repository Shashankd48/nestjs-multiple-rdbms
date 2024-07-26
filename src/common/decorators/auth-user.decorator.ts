import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TAuthUser } from '../types/auth';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): TAuthUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
