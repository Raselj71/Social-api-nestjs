import { IsEmail, IsOptional, IsString, Min } from 'class-validator';

export class UserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @Min(4)
  password: string;

  @IsString()
  @IsOptional()
  avatar_url: string;
}
