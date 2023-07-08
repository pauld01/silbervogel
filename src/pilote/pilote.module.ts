/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PiloteService } from './pilote.service';
import { PiloteController } from './pilote.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pilote } from './entities/pilote.entity';
import { PiloteSchema } from './schemas/pilote.schemas';
import { Avion, AvionSchema } from '../avion/schemas/avion.schemas'; // Mettez le chemin correct vers le fichier avion.schemas.ts
import { AvionModule } from '../avion/avion.module'; // Mettez le chemin correct vers le fichier avion.module.ts
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pilote.name, schema: PiloteSchema }]),
    MongooseModule.forFeature([{ name: Avion.name, schema: AvionSchema }]),
    MongooseModule.forRoot(process.env.DB_URL_PILOTE),
    AvionModule,
  ],
  controllers: [PiloteController],
  providers: [PiloteService],
  exports: [PiloteService],
})
export class PiloteModule {}
