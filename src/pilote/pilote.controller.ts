/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
    return this.piloteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiloteDto: UpdatePiloteDto) {
    return this.piloteService.update(id, updatePiloteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piloteService.remove(+id);
  }
}
