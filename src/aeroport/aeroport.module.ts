import { Module } from '@nestjs/common';
import { AeroportService } from './aeroport.service';
import { AeroportController } from './aeroport.controller';

@Module({
  controllers: [AeroportController],
  providers: [AeroportService]
})
export class AeroportModule {}
