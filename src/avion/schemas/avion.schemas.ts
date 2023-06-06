import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AvionDocument = Avion & Document;

@Schema()
export class Avion {
  @Prop({ required: true })
  identification: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop()
  company: string;

  @Prop()
  refreshToken: string;
}

export const AvionSchema = SchemaFactory.createForClass(Avion);