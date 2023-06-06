import { PartialType } from '@nestjs/mapped-types';
import { CreateAeroportDto } from './create-aeroport.dto';

export class UpdateAeroportDto extends PartialType(CreateAeroportDto) {}
