/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiloteModule } from './pilote/pilote.module';
import { VolModule } from './vol/vol.module';
import { AeroportModule } from './aeroport/aeroport.module';
import { AvionModule } from './avion/avion.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [PiloteModule,AeroportModule,AvionModule,VolModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
