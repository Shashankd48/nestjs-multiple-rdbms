import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  TAuthUser,
  TCreateTokenResponse,
  TValidateUserRes,
} from 'src/common/types/auth';
import { compare } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/common/database-silos/master/entities';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // async validateUserWithPassword(
  //   username: string,
  //   password: string,
  // ): Promise<TValidateUserRes> {
  //   const user = await this.userService.findByUsernamePrivate(username);
  //   let isVerified = false;
  //   let isValidAttempt = false;
  //   if (!user) return { user: null, isVerified, isValidAttempt };

  //   // Check if user's attempt is valid
  //   isValidAttempt = user.login_attempts <= 5;

  //   // Validate password
  //   isVerified = await this.comparePassword(
  //     password + user.seed,
  //     user.password,
  //   );

  //   // Remove password and seed
  //   const { password: _, seed: __ } = user;

  //   return { user, isVerified, isValidAttempt };
  // }

  async comparePassword(
    providedPass: string,
    storedPass: string,
  ): Promise<boolean> {
    const passwordIsMatched = await compare(providedPass, storedPass);
    return passwordIsMatched;
  }

  async createTokens(
    user: User,
    currentCompany: number | null,
    currentRole: number | null,
  ): Promise<TCreateTokenResponse> {
    const payload = {
      user: user.username,
      sub: user.id,
      currentCompany: currentCompany,
      currentRole: currentRole,
    };

    const accessToken = await this.jwtService.signAsync(payload);
    const cookieToken = await this.jwtService.signAsync(payload);
    return { accessToken, cookieToken };
  }

  async validateToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }
}
