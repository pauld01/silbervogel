import { Injectable } from '@nestjs/common';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Avion, AvionDocument } from './schemas/avion.schemas';
import { Model } from 'mongoose';

@Injectable()
export class AvionService {
  constructor(@InjectModel(Avion.name) private avionModel: Model<AvionDocument>) {}

  async create(createAvionDto: CreateAvionDto): Promise<AvionDocument> {
    const createdAvion = new this.avionModel(createAvionDto);
    return createdAvion.save();
  }

  async findAll(): Promise<AvionDocument[]> {
    return this.avionModel.find().exec();
  }

  async findByIdentification(identification: string): Promise<AvionDocument> {
    return this.avionModel.findById(identification);
  }

  async findByBrand(brand: string): Promise<AvionDocument[]> {
    return this.avionModel.find({ brand }).exec();
  }

  async findByModel(model: string): Promise<AvionDocument[]> {
    return this.avionModel.find({ model }).exec();
  }

  async findByCompany(company: string): Promise<AvionDocument> {
    return this.avionModel.findOne({ company }).exec();
  }

  async update(
    identification: string,
    updateAvionDto: UpdateAvionDto,
  ): Promise<AvionDocument> {
    return this.avionModel
      .findByIdAndUpdate(identification, updateAvionDto, { new: true })
      .exec();
  }

  async remove(identification: string): Promise<AvionDocument> {
    return this.avionModel.findByIdAndDelete(identification).exec();
  }

}