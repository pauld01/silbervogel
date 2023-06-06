import { PartialType } from '@nestjs/mapped-types';
import { CreateAvionDto } from './create-avion.dto';

export class UpdateAvionDto extends PartialType(CreateAvionDto) {}
