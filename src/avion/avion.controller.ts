import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AvionService } from './avion.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { DeleteAvionDto } from './dto/delete-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { concat } from 'rxjs';

@Controller('avion')
export class AvionController {
  constructor(private readonly avionService: AvionService) {}

  @Post()
  create(@Body() createAvionDto: CreateAvionDto) {
    return this.avionService.create(createAvionDto);
  }

  @Get()
  findAll() {
    return this.avionService.findAll();
  }

  @Get(':identification')
  findOne(@Param('identification') identification: string) {
    return this.avionService.findByIdentification(identification);
  }

  @Get(':model')
  findMany(@Param('model') model: string) {
    return this.avionService.findByModel(model);
  }

  // @Get(':brand')
  // findByBrand(@Param('brand') brand: string) {
  //   return this.avionService.findByBrand(brand);
  // }

  // @Get(':company')
  // findByCompany(@Param('company') company: string) {
  //   return this.avionService.findByCompany(company);
  // }

  @Patch(':identification')
  update(@Param('identification') identification: string, @Body() updateAvionDto: UpdateAvionDto) {
    return this.avionService.update(identification, updateAvionDto);
  }

  @Delete(':identification')
  delete(@Param('identification') identification: string){
    return this.avionService.remove(identification);
  }
}