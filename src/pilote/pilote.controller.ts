/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PiloteService } from './pilote.service';
import { CreatePiloteDto } from './dto/create-pilote.dto';
import { UpdatePiloteDto } from './dto/update-pilote.dto';
import channelWrapper from '../main';
import axios from 'axios';

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

  @Get(':id/vols')
  async findVolsByPiloteId(@Param('id') id: string) {
    const url_vols = 'http://localhost:3000/vol';

    try {
      // Obtenir tous les vols
      const volsResponse = await axios.get(url_vols);
      const vols = volsResponse.data;
      
      // Filtrer les vols en fonction de l'ID du pilote
      const volsDuPilote = vols.filter((vol) => vol.pilotId === id);

      // Afficher les vols correspondants
      console.log(volsDuPilote);

      return volsDuPilote;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
