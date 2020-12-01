import { NestFactory, Reflector } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters/fastify-adapter'
import { AppModule } from './app.module'
import { LocalAuthGuard } from './auth/guard/local-auth.guard'
import { NestFastifyApplication } from '@nestjs/platform-fastify'
import cookie from 'fastify-cookie'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: false,
    }),
  )

  await app.register(cookie)

  app.useGlobalGuards(new LocalAuthGuard(app.get(Reflector)))

  await app.listen(3000)
}

bootstrap()
