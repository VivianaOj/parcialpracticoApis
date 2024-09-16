import {
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { SocioEntity } from 'src/socio/socio.entity';

import { ClubSocioService } from './club-socio.service';
import { plainToInstance } from 'class-transformer';
import { SocioDto } from '../socio/socio.dto';

@Controller('clubs')
@UseInterceptors(BusinessErrorsInterceptor)
export class ClubSocioController {
  constructor(private readonly clubSocioService: ClubSocioService) {}

  @Get(':clubId/socios')
  async findMembersFromClub(@Param('clubId') clubId: number) {
    return await this.clubSocioService.findMembersFromClub(clubId);
  }

  @Get(':clubId/socios/:socioId')
  async findMemberFromClub(
    @Param('clubId') clubId: number,
    @Param('socioId') socioId: number,
  ) {
    return await this.clubSocioService.findMemberFromClub(clubId, socioId);
  }

  @Post(':clubId/socios/:socioId')
  async addMemberToClub(
    @Param('clubId') clubId: number,
    @Param('socioId') socioId: number,
  ) {
    return await this.clubSocioService.addMemberToClub(clubId, socioId);
  }

  @Put(':clubId/socios')
  async updateMembersFromClub(
    @Body() socioDto: SocioDto[],
    @Param('clubId') clubId: number,
  ) {
    const socios = plainToInstance(SocioEntity, socioDto);
    return await this.clubSocioService.updateMembersFromClub(clubId, socios);
  }

  @Delete(':clubId/socios/:socioId')
  @HttpCode(204)
  async deleteMemberFromClub(
    @Param('clubId') clubId: number,
    @Param('socioId') socioId: number,
  ) {
    return await this.clubSocioService.deleteMemberFromClub(clubId, socioId);
  }
}
