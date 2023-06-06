/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PiloteService } from './pilote.service';
import { PiloteController } from './pilote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pilote } from './entities/pilote.entity';
import { PiloteSchema } from './schemas/pilote.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pilote.name, schema: PiloteSchema }]),
    MongooseModule.forRoot('mongodb+srv://doadmin:W3H67f0nc85zT12S@silbervogel-pilote-c0dbe9a6.mongo.ondigitalocean.com/pilote?replicaSet=silbervogel-pilote&tls=true&authSource=admin'),
  ],
  controllers: [PiloteController],
  providers: [PiloteService],
  exports: [PiloteService],
})
export class PiloteModule {}
