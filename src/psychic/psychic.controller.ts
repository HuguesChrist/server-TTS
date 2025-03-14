import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PsychicService } from './psychic.service';
import { CreatePsychicDto } from './dto/create-psychic.dto';
import { UpdatePsychicDto } from './dto/update-psychic.dto';

@Controller('psychic')
export class PsychicController {
  constructor(private readonly psychicService: PsychicService) {}

  @Post()
  create(@Body() createPsychicDto: CreatePsychicDto) {
    return this.psychicService.create(createPsychicDto);
  }

  @Get()
  findAll() {
    return this.psychicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psychicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsychicDto: UpdatePsychicDto) {
    return this.psychicService.update(id, updatePsychicDto);
  }
}
