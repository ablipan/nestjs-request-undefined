import {
  Controller,
  Get,
  Request,
} from '@nestjs/common'

@Controller('auth')
export class AuthController {
  @Get()
  getSession(@Request() req): unknown {
    return {
      user: req.user,
    }
  }
}
