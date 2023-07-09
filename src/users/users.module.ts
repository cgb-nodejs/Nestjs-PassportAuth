import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { Global } from '@nestjs/common';

@Global()
@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
