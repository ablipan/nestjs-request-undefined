import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { LocalStrategy } from './strategy/local.strategy'
import { AuthController } from './auth.controller'

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
