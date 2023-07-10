import { PartialType } from '@nestjs/mapped-types';
import { CreateVolDto } from './create-vol.dto';

export class UpdateVolDto extends PartialType(CreateVolDto) {}
