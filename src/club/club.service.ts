import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';

import { unknownMsg } from '../shared/utils/validation.utils';
import { ClubEntity } from './club.entity';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(ClubEntity)
    private clubRepository: Repository<ClubEntity>,
  ) {}

  async findAll(): Promise<ClubEntity[]> {
    return this.clubRepository.find();
  }

  async findOne(id: number): Promise<ClubEntity> {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    return club;
  }

  async create(club: ClubEntity): Promise<ClubEntity> {
    return await this.clubRepository.save(club);
  }

  async update(id: number, club: ClubEntity): Promise<ClubEntity> {
    if (club.descripcion.length > 100) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    const clubPersisted = await this.clubRepository.findOne({ where: { id } });
    if (!clubPersisted) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    return await this.clubRepository.save({ ...clubPersisted, ...club });
  }

  async delete(id: number): Promise<void> {
    const clubToDelete = await this.clubRepository.findOne({ where: { id } });
    if (!clubToDelete) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    await this.clubRepository.remove(clubToDelete);
  }
}
