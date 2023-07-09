import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './passport/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './passport/session.serializer';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [SessionSerializer, AuthService, LocalStrategy],
})
export class AuthModule {}
