import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvionModule } from './avion/avion.module';
import { PiloteModule } from './pilote/pilote.module';
import { AeroportModule } from './aeroport/aeroport.module';

@Module({
  imports: [PiloteModule,AeroportModule,AvionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
