/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aeroportService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAeroportDto: UpdateAeroportDto) {
    return this.aeroportService.update(id, updateAeroportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aeroportService.remove(id);
  }
}
