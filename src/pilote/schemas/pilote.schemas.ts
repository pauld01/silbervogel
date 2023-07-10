/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PiloteDocument = Pilote & Document;


@Schema()

export class Pilote {

  @Prop({ required: true })
  
  name: string;


  @Prop({ required: true })

  surname: string;

  @Prop()

  refreshToken: string;

}

export const PiloteSchema = SchemaFactory.createForClass(Pilote);