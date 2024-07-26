import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'marcel' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'test1234' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  @IsNumber()
  company: number;
}
