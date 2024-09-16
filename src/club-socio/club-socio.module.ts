import { Module } from '@nestjs/common';
import { ClubSocioController } from './club-socio.controller';
import { ClubEntity } from 'src/club/club.entity';
import { ClubSocioService } from './club-socio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioEntity } from 'src/socio/socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClubEntity, SocioEntity])],
  providers: [ClubSocioService],
  controllers: [ClubSocioController],
})
export class ClubSocioModule {}
