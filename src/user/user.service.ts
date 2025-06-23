import { DatabaseService } from './../database/database.service';
import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { ApiResponse } from 'src/common/types/ApiResponse';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly database: DatabaseService) {}

  async createUser(body: CreateUserDto): Promise<ApiResponse<any | null>> {
    const user = await this.database.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      return {
        message: 'User Alreay Exit',
        payload: null,
        success: false,
        status: HttpStatus.ALREADY_REPORTED,
      };
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    body.password = hashedPassword;
    const registerUser = await this.database.user.create({
      data: body,
      select: {
        id: true,
        name: true,
        email: true,
        bio: true,
        avatarUrl: true,

        createdAt: true,
        updatedAt: true,
      },
    });
    return {
      message: 'User created successfully',
      payload: registerUser,
      success: true,
      status: HttpStatus.CREATED,
    };
  }
}
