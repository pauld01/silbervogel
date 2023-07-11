/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePiloteDto } from './dto/create-pilote.dto';
import { UpdatePiloteDto } from './dto/update-pilote.dto';
import { PiloteDocument } from './schemas/pilote.schemas';
import { Model, ObjectId  } from 'mongoose';
import { Pilote } from './entities/pilote.entity';

@Injectable()
export class PiloteService {
  constructor(@InjectModel(Pilote.name) private piloteModel: Model<PiloteDocument>) {}

  /**
   * This action create an pilote
   * @param createPiloteDto 
   * @returns 
   */
  async create(createPiloteDto: CreatePiloteDto): Promise<PiloteDocument> {

    const createdPilote = new this.piloteModel(createPiloteDto);

    return createdPilote.save();

  }

  /**
   * This action returns all pilote
   * @returns 
   */
  async findAll(): Promise<PiloteDocument[]> {
    return this.piloteModel.find().exec();
  }

  /**
   * This action returns a pilote depending of the id
   * @param id 
   * @returns 
   */
  async findOne(id: string): Promise<PiloteDocument> {
    return this.piloteModel.findById(id);
  }

  /**
   * This action returns a pilote depending of his name
   * @param name 
   * @returns 
   */
  async findByName(name: string): Promise<PiloteDocument[]> {
    return this.piloteModel.aggregate([
      { $match: { name } },
      { $project: { _id: 0 } }
    ]).exec();
  }

  async findByFilter(filter: any): Promise<PiloteDocument[]> {
    return this.piloteModel.find(filter).exec();
  }

  /**
   * This action returns a pilote depending of his surname
   * @param surname 
   * @returns 
   */
  async findBySurname(surname: string): Promise<PiloteDocument[]> {
    return this.piloteModel.find({ surname }, { _id: 0 }).exec();
  }

  /**
   * This action updates pilote depending on the id
   * @param id 
   * @param updatePiloteDto 
   * @returns 
   */
  async update(id: string, UpdatePiloteDto: UpdatePiloteDto): Promise<PiloteDocument> {
    return this.piloteModel.findByIdAndUpdate(id, UpdatePiloteDto, { new: true }).exec();
  }

  /**
   * This action removes pilote depending on the id
   * @param id 
   * @returns 
   */
  async remove(id: string) {
    this.piloteModel.findByIdAndDelete(id).exec();
  }
}
