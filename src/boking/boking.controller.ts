import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BokingService } from './boking.service';
import { CreateBokingDto } from './dto/create-boking.dto';
import { UpdateBokingDto } from './dto/update-boking.dto';

@Controller('boking')
export class BokingController {
  constructor(private readonly bokingService: BokingService) {}

  @Post()
  create(@Body() createBokingDto: CreateBokingDto) {
    return this.bokingService.create(createBokingDto);
  }

  @Get()
  findAll() {
    return this.bokingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bokingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBokingDto: UpdateBokingDto) {
    return this.bokingService.update(id, updateBokingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bokingService.remove(id);
  }
}
