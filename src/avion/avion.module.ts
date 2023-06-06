import { Module } from '@nestjs/common';
import { AvionService } from './avion.service';
import { AvionController } from './avion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Avion, AvionSchema } from './schemas/avion.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Avion.name, schema: AvionSchema }]),
  ],
  controllers: [AvionController],
  providers: [AvionService],
  exports: [AvionService]
})
export class AvionModule {}
