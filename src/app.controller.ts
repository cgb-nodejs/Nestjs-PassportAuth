import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthenticatedGuard } from './auth/guards/Authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Get('login')
  login(): string {
    return 'hello welcome';
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  getProfile(): string {
    return 'hello profile';
  }
}
