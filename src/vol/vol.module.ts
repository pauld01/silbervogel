import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { VolService } from './vol.service';
import { VolController } from './vol.controller';
import { Vol, VolSchema } from './schemas/vol.schemas';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vol.name, schema: VolSchema }]),
    MongooseModule.forRoot(process.env.DB_URL_VOL),
  ],
  controllers: [VolController],
  providers: [VolService],
  exports: [VolService],
})
export class VolModule {}
