/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PiloteService } from './pilote.service';
import { CreatePiloteDto } from './dto/create-pilote.dto';
import { UpdatePiloteDto } from './dto/update-pilote.dto';
import { channelWrapper } from "../main";
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

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.piloteService.findByName(name);
  }

  @Get('surname/:surname')
  findBySurname(@Param('surname') name: string) {
    return this.piloteService.findBySurname(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiloteDto: UpdatePiloteDto) {
    return this.piloteService.update(id, updatePiloteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piloteService.remove(id);
  }

  @Get(':id/avions')
  async getAvionsPiloteId(@Param('id') id: string) {
    // get pilot by idd and add data to message send queue
    const pilote = await this.piloteService.findOne(id);
    if(pilote) {
      channelWrapper
      .sendToQueue('avions_queue', { "data" : {
        idPilote : id,
        name : pilote.name,
        surname : pilote.surname,
      }})
      .then(function () {
        return console.log('Message was sent!  Hooray!');
      })
      .catch(function (err) {
        return console.log('Message was rejected...  Boo!');
      });
    }
  }


}
