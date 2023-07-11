import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvConfig } from 'dotenv';
import amqp from 'amqp-connection-manager';
async function bootstrap() {
  dotenvConfig();

  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();

var connection = amqp.connect(['amqp://localhost:3002']);
var channelWrapper = connection.createChannel({
  json: true,
  setup: function (channel) {
    return channel.assertQueue('avions_queue', { durable: true });
  },
});

export default channelWrapper;
