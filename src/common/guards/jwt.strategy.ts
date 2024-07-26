import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService = new ConfigService()) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

    async validate(payload: {
        sub: any;
        user: any;
        currentCompany: number;
        currentRole: number;
    }) {
    // validate if not in blacklist
        return {
            id: payload.sub,
            user: payload.user,
            currentCompany: payload.currentCompany,
            currentRole: payload.currentRole,
        };
  }
}
