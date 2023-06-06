import { Injectable } from '@nestjs/common';
import { CreateAeroportDto } from './dto/create-aeroport.dto';
import { UpdateAeroportDto } from './dto/update-aeroport.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Aeroport, AeroportDocument } from './schemas/aeroport.schemas';
import { Model } from 'mongoose';

@Injectable()
export class AeroportService {
  constructor(@InjectModel(Aeroport.name) private aeroportModel: Model<AeroportDocument>) {}

  async create(createAeroportDto: CreateAeroportDto): Promise<AeroportDocument> {
    const createdAeroport = new this.aeroportModel(createAeroportDto);
    return createdAeroport.save();
  }

  async findAll(): Promise<AeroportDocument[]> {
    return this.aeroportModel.find().exec();
  }

  async findById(id: string): Promise<AeroportDocument> {
    return this.aeroportModel.findById(id);
  }

  async findByName(name: string): Promise<AeroportDocument> {
    return this.aeroportModel.findOne({ name }).exec();
  }

  async findByCountry(country: string): Promise<AeroportDocument[]> {
    return this.aeroportModel.find({ country }).exec();
  }

  async findByCity(city: string): Promise<AeroportDocument[]> {
    return this.aeroportModel.find({ city }).exec();
  }

  async update(id: string, updateAeroportDto: UpdateAeroportDto): Promise<AeroportDocument> {
    return this.aeroportModel
      .findByIdAndUpdate(id, updateAeroportDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<AeroportDocument> {
    return this.aeroportModel.findByIdAndDelete(id).exec();
  }
}
