import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

// The purpose of this middleware is to
//  - inspect the JWT-token of the request
//  - validate it, whilst retrieving the payload
//  - examining it for a 'company' property
//  - modify the request properties by adding a MujltyTenancy property based on the companyId
// thus enabling the MultiTenancyProvider to select the appropriate tenant DataSource to which the request shouldbe applied.

declare global {
  namespace Express {
    interface Request {
      CurrentCompanyId?: number | null;
      CurrentRoleId?: number | null;
    }
  }
}

@Injectable()
export class MultiTenancyRequestModifierMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    /// Check if there is an authorization header present
    const authHeader = req.header('authorization');
    if (authHeader) {
      // Extract the JWT token
      const bearerToken: string[] = authHeader.split(' ');
      const token: string = bearerToken[1];

      // Validate the token, retrieving the payload
      const validateResult = await this.validateToken(token);

      // Extract the Company information
      if (validateResult?.currentCompany) {
        const companyId: number | null = validateResult.currentCompany;
        const roleId: number | null = validateResult.currentRole;

        // Place the company information on the request
        req.CurrentCompanyId = companyId;
        req.CurrentRoleId = roleId;
      }
    }

    // Continue pipeline
    next();
  }

  async validateToken(token: string) {
    const verificationResult = await this.jwtService.verify(token, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    return verificationResult;
  }
}
