import {
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';

import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { SocioService } from './socio.service';
import { SocioEntity } from './socio.entity';
import { SocioDto } from './socio.dto';

@Controller('socio')
@UseInterceptors(BusinessErrorsInterceptor)
export class SocioController {
  constructor(private readonly socioService: SocioService) {}

  @Get()
  async findAll() {
    return await this.socioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.socioService.findOne(id);
  }

  @Post()
  async create(@Body() socioDto: SocioDto) {
    const socio: SocioEntity = plainToInstance(SocioEntity, socioDto);
    return await this.socioService.create(socio);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() socioDto: SocioDto) {
    const socio: SocioEntity = plainToInstance(SocioEntity, socioDto);
    return await this.socioService.update(id, socio);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    return await this.socioService.delete(id);
  }
}
