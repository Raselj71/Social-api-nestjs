import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/createUserDto';
import { LoginUserDto } from 'src/user/dto/loginUserDto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('/signin')
  createAccount(@Body() Body: CreateUserDto) {
    return this.auth.createAccount(Body);
  }

  @Post('/login')
  async loginAccount(
    @Body() Body: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const res = await this.auth.LoginAccount(Body);
    if (res.success) {
      response.cookie('token', res.payload.token);
    }
    return res;
  }
}
