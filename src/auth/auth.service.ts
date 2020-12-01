import { Inject, Injectable, Logger } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { FastifyRequest } from 'fastify'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(@Inject(REQUEST) private request: FastifyRequest){}

  /**
   * 使用at获取session信息
   */
  async getSession(): Promise<boolean> {
    this.logger.log(this.request.url)
    return true
  }
}
