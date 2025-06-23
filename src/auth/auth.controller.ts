import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/createUserDto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('/signin')
  createAccount(@Body() Body: CreateUserDto) {
    return this.auth.createAccount(Body);
  }
}
