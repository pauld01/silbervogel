/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AvionService } from './avion.service';
import { AvionController } from './avion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Avion, AvionSchema } from './schemas/avion.schemas';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Avion.name, schema: AvionSchema }]),
    MongooseModule.forRoot(process.env.DB_URL_AVION),
  ],
  controllers: [AvionController],
  providers: [AvionService],
  exports: [AvionService]
})
export class AvionModule {}
