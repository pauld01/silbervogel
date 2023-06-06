import { Module } from '@nestjs/common';
import { AvionService } from './avion.service';
import { AvionController } from './avion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Avion, AvionSchema } from './schemas/avion.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Avion.name, schema: AvionSchema }]),
    MongooseModule.forRoot('mongodb+srv://doadmin:648y917X5eWvco0b@silbervogel-avion-9b31472b.mongo.ondigitalocean.com/avion?authSource=admin&replicaSet=silbervogel-avion&tls=true'),
  ],
  controllers: [AvionController],
  providers: [AvionService],
  exports: [AvionService]
})
export class AvionModule {}
