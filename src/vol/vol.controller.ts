import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VolService } from './vol.service';
import { CreateVolDto } from './dto/create-vol.dto';
import { UpdateVolDto } from './dto/update-vol.dto';

@Controller('vol')
export class VolController {
  constructor(private readonly volService: VolService) {}

  @Post()
  create(@Body() createVolDto: CreateVolDto) {
    return this.volService.create(createVolDto);
  }

  @Get()
  findAll() {
    return this.volService.findAll();
  }

  @Get(':flightNumber/:departureDate')
  findOne(
    @Param('flightNumber') flightNumber: string,
    @Param('departureDate') departureDate: string,
  ) {
    return this.volService.findOne(flightNumber, departureDate);
  }

  @Patch(':flightNumber/:departureDate')
  update(
    @Param('flightNumber') flightNumber: string,
    @Param('departureDate') departureDate: string,
    @Body() updateVolDto: UpdateVolDto,
  ) {
    return this.volService.update(flightNumber, departureDate, updateVolDto);
  }

  @Delete(':flightNumber/:departureDate')
  remove(
    @Param('flightNumber') flightNumber: string,
    @Param('departureDate') departureDate: string,
  ) {
    return this.volService.remove(flightNumber, departureDate);
  }
}
