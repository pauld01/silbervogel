import { Module } from '@nestjs/common';
import { AeroportService } from './aeroport.service';
import { AeroportController } from './aeroport.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aeroport, AeroportSchema } from './schemas/aeroport.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aeroport.name, schema: AeroportSchema }]),
    MongooseModule.forRoot('mongodb+srv://silbervogel-aeroport-1e18f247.mongo.ondigitalocean.com')
  ],
  controllers: [AeroportController],
  providers: [AeroportService],
  exports: [AeroportService]
})
export class AeroportModule {}
