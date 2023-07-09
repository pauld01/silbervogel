import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AvionService } from './avion.service';
import { CreateAvionDto } from './dto/create-avion.dto';
import { UpdateAvionDto } from './dto/update-avion.dto';


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
    const byModel = await this.avionService.findByModel(model);
    const byBrand = await this.avionService.findByBrand(brand);
    const byCompany = await this.avionService.findByCompany(company);
    
    return [...byModel, ...byBrand, byCompany];
  }

  @Get()
  async findOne(@Query('identification') identification: string) {
    const byIdentification = await this.avionService.findByIdentification(identification);
    console.log("identification : ", identification);
    return [byIdentification]
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