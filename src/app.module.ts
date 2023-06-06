import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeroportModule } from './modules/aeroport/aeroport.module';

@Module({
  imports: [AeroportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
