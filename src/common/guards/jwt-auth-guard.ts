import {
  ExecutionContext,
  // Global,
  // Inject,
  Injectable,
  // Scope,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { UserService } from 'src/user/user.service';
// import { identity, Observable } from 'rxjs';
// import { JwtBlacklist } from '../user/interfaces/jwtBlacklist.interface';
// import { BlacklistService } from './blacklist.service';
// import * as sqlite3 from 'sqlite3';
// import { open as sqlite_open } from 'sqlite';
// import constants from '../config/constants';
// const jwt = require('jsonwebtoken');
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private superCanactivate;
  constructor() {
    // private readonly blacklistService: BlacklistService, // @Inject(BlacklistService)
    super();
    this.superCanactivate = super.canActivate;
  }
  // private configService = new ConfigService();
  // private readonly userService: UserService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // const request = context.switchToHttp().getRequest();
      await this.superCanactivate(context);
      // const authorizationToken = request.headers.authorization.split(' ')[1];

      const { user } = context.switchToHttp().getRequest();

      // console.log('log: user', user);

      // const foundUser = await this.userService.findById(user.id);

      // console.log('log: foundUser', foundUser);

      // if (!foundUser) return false;

      //Check access token
      // if (authorizationToken) {
      //   let result: any;
      //   try {
      //     console.log('authorizationToken', authorizationToken);
      //     console.log(authorizationToken);
      //     const accessToken = jwt.verify(
      //       authorizationToken,
      //       this.configService.get<string>('JWT_SECRET'),
      //     );
      //     // const accessToken = this.jwtService.verify(authorizationToken, {
      //     //   secret: this.configService.get<string>('JWT_SECRET'),
      //     // });

      //     // const accessToken = this.jwtService.verify(authorizationToken);

      //     console.log('accessToken auth', accessToken);

      //     if (accessToken) return true;
      //     else false;
      //   } catch (error) {
      //     console.log('ERROR: ', error);
      //     return false;
      //   }

      //   //NOTE: Setup refreshtoken here
      //   // if (refreshToken.sub === accessToken.sub) {
      //   //   try {
      //   //     const db = await sqlite_open({
      //   //       filename: '../../zca.db',
      //   //       driver: sqlite3.Database,
      //   //       mode: sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
      //   //     });

      //   //     result = await db.get(
      //   //       'SELECT token FROM blacklist WHERE token = ?',
      //   //       authorizationToken,
      //   //     );
      //   //     await db.close();
      //   //   } catch (error) {
      //   //     console.log(
      //   //       'sqlite blacklist error check canActivate inside jwt-auth.gaurd.ts',
      //   //       error,
      //   //     );
      //   //   }
      //   //   if (
      //   //     result !== undefined &&
      //   //     authorizationToken !== undefined &&
      //   //     result.token == authorizationToken
      //   //   ) {
      //   //     console.log('blaclisted ');
      //   //     return false;
      //   //   } else {
      //   //     console.log('not blacklisted');
      //   //     return true;
      //   //   }
      //   // } else {
      //   //   return false;
      //   // }
      // } else {
      //   return false;
      // }
      if (user) return true;

      return false;
    } catch (error) {
      return false;
    }
  }
}
