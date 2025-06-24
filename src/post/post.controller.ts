import { Body, Controller, Post, Req } from '@nestjs/common';
import { postDto } from './dto/post.dto';
import { PostService } from './post.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private post: PostService) {}
  @Post('create')
  createPost(@Body() body: postDto, @Req() req: Request) {
    return this.post.create(body, req);
  }
}
