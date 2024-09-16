import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  UseInterceptors,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ClubEntity } from './club.entity';
import { ClubService } from './club.service';
import { ClubDto } from './club.dto';

@Controller('club')
@UseInterceptors(BusinessErrorsInterceptor)
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  async findAll() {
    return this.clubService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.clubService.findOne(id);
  }

  @Post()
  async create(@Body() clubDto: ClubDto) {
    const club: ClubEntity = plainToInstance(ClubEntity, clubDto);
    return await this.clubService.create(club);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() clubDto: ClubDto) {
    const club: ClubEntity = plainToInstance(ClubEntity, clubDto);
    return await this.clubService.update(id, club);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number) {
    return this.clubService.delete(id);
  }
}
