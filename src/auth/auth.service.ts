import { CreateUserDto } from 'src/user/dto/createUserDto';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly user: UserService) {}
  createAccount(body: CreateUserDto) {
    return this.user.createUser(body);
  }
}
