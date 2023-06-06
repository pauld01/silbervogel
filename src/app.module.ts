import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiloteModule } from './pilote/pilote.module';

@Module({
  imports: [PiloteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
