import {
  Controller,
  Get,
  Request,
} from '@nestjs/common'

import { Public } from './decorator/public.decorator'

@Controller('auth')
export class AuthController {
  @Get()
  getSession(@Request() req): unknown {
    return {
      user: req.user,
      name: 'xx',
    }
  }

  @Public()
  @Get('version')
  version(): string {
    return '1.0.0'
  }
}
