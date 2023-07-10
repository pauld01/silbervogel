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

  async findOne(id: string): Promise<AvionDocument>{
    return this.avionModel.findById(id);
  }

  async findByIdentification(identification: string): Promise<AvionDocument> {
    return await this.avionModel.findOne({ identification }).exec();
  }

  async findByBrand(brand: string): Promise<AvionDocument[]> {
    return await this.avionModel.find({ brand }).exec();
  }

  async findByModel(model: string): Promise<AvionDocument[]> {
    return await this.avionModel.find({ model: { $eq: model } }).exec();
  }

  async findByCompany(company: string): Promise<AvionDocument[]> {
    return await this.avionModel.find({ company: {$eq: company} }).exec();
  }

  async update(
    identification: string,
    updateAvionDto: UpdateAvionDto,
  ): Promise<AvionDocument> {
    return this.avionModel.findByIdAndUpdate(identification, updateAvionDto, { new: true }).exec();
  }

  /**
   * This action removes 'avion' depending on the id
   * @param identification 
   * @returns 
   */
   async remove(identification: string) {
    this.avionModel.findByIdAndDelete(identification).exec();
  }
}