/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PiloteService } from './pilote.service';
import { CreatePiloteDto } from './dto/create-pilote.dto';
import { UpdatePiloteDto } from './dto/update-pilote.dto';

@Controller('pilote')
export class PiloteController {
  constructor(private readonly piloteService: PiloteService) {}

  @Post()
  create(@Body() createPiloteDto: CreatePiloteDto) {
    return this.piloteService.create(createPiloteDto);
  }

  @Get()
  findAll() {
    return this.piloteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.piloteService.findOne(id);
  }

  @Get('/filter')
  async findMany(@Query('name') name: string, @Query('surname') surname: string) {
    const filter: any = {};

    if (name) {
      filter.name = name;
    }

    if (surname) {
      filter.surname = surname;
    }

    const results = await this.piloteService.findByFilter(filter);
    return results;
  }


  /*@Get(':id/avions')
  getPiloteAvions(@Param('id') id: number) {
    return this.piloteService.getPiloteAvions(id);
  }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiloteDto: UpdatePiloteDto) {
    return this.piloteService.update(id, updatePiloteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piloteService.remove(id);
  }
}
