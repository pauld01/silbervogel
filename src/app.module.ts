import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiloteModule } from './pilote/pilote.module';
import { AeroportModule } from './aeroport/aeroport.module';

@Module({
  imports: [PiloteModule,AeroportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
