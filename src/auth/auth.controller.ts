import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import { DemoInterceptor } from 'src/common/interceptor/DemoInterceptor';

@Controller('auth')
export class AuthController {


    constructor (private AuthService:AuthService){}


    @UseInterceptors(DemoInterceptor)
    @Post('/signin')
    async createAccount(@Body() Body:UserDto){

         return this.AuthService.createAccount(Body)
        
    }
}
