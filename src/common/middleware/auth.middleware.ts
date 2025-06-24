import { NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;

    if (!token) {
      throw new UnauthorizedException('Authorize token not found');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      req['user'] = payload;
      next();
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error.message);
    }
  }
}
