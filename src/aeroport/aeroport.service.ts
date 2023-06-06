import { Injectable } from '@nestjs/common';
import { CreateAeroportDto } from './dto/create-aeroport.dto';
import { UpdateAeroportDto } from './dto/update-aeroport.dto';

@Injectable()
export class AeroportService {
  create(createAeroportDto: CreateAeroportDto) {
    return 'This action adds a new aeroport';
  }

  findAll() {
    return `This action returns all aeroport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aeroport`;
  }

  update(id: number, updateAeroportDto: UpdateAeroportDto) {
    return `This action updates a #${id} aeroport`;
  }

  remove(id: number) {
    return `This action removes a #${id} aeroport`;
  }
}
