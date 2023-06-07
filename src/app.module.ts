/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_HOST_AEROPORT, {
      connectionName: 'aeroport',
      auth: {
        username: process.env.DB_USERNAME_AEROPORT,
        password: process.env.DB_PASSWORD_AEROPORT,
      },
    }),
    MongooseModule.forRoot(process.env.DB_HOST_AVION, {
      connectionName: 'avion',
      auth: {
        username: process.env.DB_USERNAME_AVION,
        password: process.env.DB_PASSWORD_AVION,
      },
    }),
    MongooseModule.forRoot(process.env.DB_HOST_PILOTE, {
      connectionName: 'pilote',
      auth: {
        username: process.env.DB_USERNAME_PILOTE,
        password: process.env.DB_PASSWORD_PILOTE,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
