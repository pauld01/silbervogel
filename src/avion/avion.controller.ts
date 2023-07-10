import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AvionService } from './avion.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';
import { combineLatest } from 'rxjs';


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

  @Get('/filter')
  async findMany(@Query('model') model: string, @Query('brand') brand: string, @Query('company') company: string) {
    const byBrand = await this.avionService.findByBrand(brand);
    const byModel = await this.avionService.findByModel(model);
    const byCompany = await this.avionService.findByCompany(company);

    return [...byBrand, ...byModel, ...byCompany];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avionService.findOne(id);
  }

  @Patch(':identification')
  update(@Param('identification') identification: string, @Body() updateAvionDto: UpdateAvionDto) {
    return this.avionService.update(identification, updateAvionDto);
  }

  @Delete(':identification')
  delete(@Param('identification') identification: string){
    return this.avionService.remove(identification);
  }
}