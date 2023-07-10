import { PartialType } from '@nestjs/mapped-types';
import { CreatePiloteDto } from './create-pilote.dto';

export class UpdatePiloteDto extends PartialType(CreatePiloteDto) {}
