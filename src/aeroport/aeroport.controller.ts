/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AeroportService } from './aeroport.service';
import { CreateAeroportDto } from './dto/create-aeroport.dto';
import { UpdateAeroportDto } from './dto/update-aeroport.dto';

@Controller('aeroport')
export class AeroportController {
  constructor(private readonly aeroportService: AeroportService) {}

  @Post()
  create(@Body() createAeroportDto: CreateAeroportDto) {
    return this.aeroportService.create(createAeroportDto);
  }

  @Get()
  findAll() {
    return this.aeroportService.findAll();
  }

  @Get(':code')
  findByCode(@Param('code') code: string) {
    return this.aeroportService.findByCode(code);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.aeroportService.findByName(name);
  }

  @Get('country/:country')
  findByCountry(@Param('country') country: string) {
    return this.aeroportService.findByCountry(country);
  }

  @Get('city/:city')
  findByCity(@Param('city') city: string) {
    return this.aeroportService.findByCity(city);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() updateAeroportDto: UpdateAeroportDto) {
    return this.aeroportService.update(code, updateAeroportDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.aeroportService.remove(code);
  }
}