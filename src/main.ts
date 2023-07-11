import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvConfig } from 'dotenv';
import amqp from 'amqp-connection-manager';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  dotenvConfig();

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'flight_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(); // Launch the microservice

  // Define your channelWrapper here
}
bootstrap();
const channelWrapper = amqp.connect(['amqp://localhost:5672']);

export default channelWrapper;