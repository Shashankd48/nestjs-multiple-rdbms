import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { successRes } from 'src/common/interceptors';
import { AuthUser } from 'src/common/decorators';
import { TAuthUser } from 'src/common/types/auth';
import { JwtAuthGuard } from 'src/common/guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.findOne({
      where: { username: loginDto.username },
    });

    const { accessToken } = await this.authService.createTokens(
      user,
      loginDto.company,
      null,
    );

    return successRes(accessToken);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@AuthUser() auth: TAuthUser) {
    const user = await this.usersService.findOne({ where: { id: auth.id } });

    return successRes(user);
  }
}
