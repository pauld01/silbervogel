/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiloteModule } from './pilote/pilote.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PiloteModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
