import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';


export type AeroportDocument = Aeroport & Document;


@Schema()

export class Aeroport {

  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  city: string;

  @Prop()
  refreshToken: string;

}


export const AeroportSchema = SchemaFactory.createForClass(Aeroport);