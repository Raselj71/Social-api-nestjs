import { IsOptional, IsString } from 'class-validator';

export class postDto {
  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  videoUrl: string;
}
