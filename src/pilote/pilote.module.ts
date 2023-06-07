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
  ],
  controllers: [PiloteController],
  providers: [PiloteService],
  exports: [PiloteService],
})
export class PiloteModule {}
