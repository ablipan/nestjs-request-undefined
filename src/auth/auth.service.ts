import { Inject, Injectable, Logger } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { Request } from 'express'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(@Inject(REQUEST) private request: Request){}

  async getSession(): Promise<boolean> {
    // @fixme got error here!
    this.logger.log(this.request.url)
    // hard code...
    return true
  }
}
