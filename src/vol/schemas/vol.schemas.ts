import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Vol schema mongoose (ODM) pour la base de données MongoDB
 * Définit le schéma de données pour les vols. Décrit la forme des documents stockés dans la collection "vols".
 */

@Schema()
export class Vol {
  @Prop({ required: true, unique: true })
  flightNumber: string;

  @Prop({ required: false })
  airportCode: string;

  @Prop({ required: true })
  operatingAirlineCode: string;

  @Prop({ required: true })
  departureCity: string;

  @Prop({ required: true })
  arrivalCity: string;

  @Prop({ required: true })
  departureDate: Date;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: false })
  aircraftId: string;

  @Prop({ required: false })
  pilotId: string;

  @Prop({ required: true })
  passengers: number;
}

// SchemaFactory permet de générer un schéma mongoose à partir d'une classe TypeScript
export const VolSchema = SchemaFactory.createForClass(Vol);
// VolDocument est un type TypeScript qui représente un document mongoose
export type VolDocument = Vol & Document;

VolSchema.index({ flightNumber: 1, departureDate: 1 }, { unique: true });

/** 
 * Without decorators
export const VolSchema = new mongoose.Schema({
  // Numéro de vol
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  // Ville de départ
  departureCity: {
    type: String,
    required: true,
  },
  // Ville d'arrivée
  arrivalCity: {
    type: String,
    required: true,
  },
  // Date de départ
  departureDate: {
    type: Date,
    required: true,
  },
  // Date d'arrivée
  arrivalDate: {
    type: Date,
    required: true,
  },

  // Immatriculation de l'avion
  aircraftRegistration: {
    type: String,
    required: true,
  },
  // Nombre de passagers
  passengers: {
    type: Number,
    required: true,
  },
  // Code de la compagnie aérienne
  operatingAirlineCode: {
    type: String,
    required: true,
  },
  // Type d'avion
  aircraftType: {
    type: String,
    required: true,
  },
});
*/
