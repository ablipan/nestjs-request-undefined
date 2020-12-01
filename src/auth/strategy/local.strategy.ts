import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ContextIdFactory, ModuleRef } from '@nestjs/core'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'
import { FastifyRequest } from 'fastify'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
    })
  }

  async validate(
    request: FastifyRequest,
    username: string,
    password: string,
  ): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request)
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId)
    const user = await authService.getSession()
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
