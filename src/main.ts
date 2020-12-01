import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { LocalAuthGuard } from './auth/guard/local-auth.guard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalGuards(new LocalAuthGuard(app.get(Reflector)))

  await app.listen(3000)
}

bootstrap()
