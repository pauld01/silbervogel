import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvConfig } from 'dotenv';

async function bootstrap() {
  
  dotenvConfig();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
