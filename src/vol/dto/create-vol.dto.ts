export class CreateVolDto {
  flightNumber: string;
  operatingAirlineCode: string;
  departureCity: string;
  arrivalCity: string;
  departureDate: Date;
  duration: number;
  aircraftRegistration: string;
  aircraftType: string;
  passengers: number;
  refreshToken?: string;
}
