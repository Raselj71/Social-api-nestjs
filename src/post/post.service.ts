import { Request } from 'express';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { postDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private database: DatabaseService) {}
   create(Body: postDto, req: Request) {
    const token = req.cookies.token;
    //  const post=await this.database.post.create({

    //     data:{
    //         content:Body.content,

    //     }
    //  })

    return token;
  }
}
