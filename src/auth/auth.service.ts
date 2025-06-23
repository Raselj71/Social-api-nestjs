import { CreateUserDto } from 'src/user/dto/createUserDto';
import { UserService } from './../user/user.service';
import { Injectable, Body } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/loginUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly user: UserService) {}
  createAccount(body: CreateUserDto) {
    return this.user.createUser(body);
  }

  async LoginAccount(body: LoginUserDto) {
    return await this.user.loginUser(body);
  }
}
