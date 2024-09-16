import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocioEntity } from 'src/socio/socio.entity';
import { ClubEntity } from 'src/club/club.entity';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';
import { unknownMsg } from '../shared/utils/validation.utils';

@Injectable()
export class ClubSocioService {
  constructor(
    @InjectRepository(ClubEntity)
    private clubRepository: Repository<ClubEntity>,
    @InjectRepository(SocioEntity)
    private socioRepository: Repository<SocioEntity>,
  ) {}

  async addMemberToClub(clubId: number, socioId: number): Promise<void> {
    const c = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: ['socios'],
    });
    if (!c) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    const socio = await this.socioRepository.findOne({
      where: { id: socioId },
    });
    if (!socio) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }

    c.sociosList.push(socio);
    await this.clubRepository.save(c);
  }

  async findMembersFromClub(clubId: number): Promise<SocioEntity[]> {
    const club = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: ['socios'],
    });
    if (!club) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    return club.sociosList;
  }

  async findMemberFromClub(
    clubId: number,
    socioId: number,
  ): Promise<SocioEntity> {
    const club = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: ['socios'],
    });
    if (!club) {
      throw new BusinessLogicException(
        'El club con el id proporcionado no existe',
        BusinessError.NOT_FOUND,
      );
    }
    const s = await this.socioRepository.findOne({
      where: { id: socioId },
    });
    if (!s) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    const found: SocioEntity = club.sociosList.find((s) => s.id === s.id);
    if (!found) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    return found;
  }

  async deleteMemberFromClub(clubId: number, socioId: number): Promise<void> {
    const club = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: ['socios'],
    });
    if (!club) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    const s = await this.socioRepository.findOne({
      where: { id: socioId },
    });
    if (!s) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    club.sociosList = club.sociosList.filter((s) => s.id !== s.id);
    await this.clubRepository.save(club);
  }

  async updateMembersFromClub(
    clubId: number,
    socios: SocioEntity[],
  ): Promise<void> {
    const club = await this.clubRepository.findOne({
      where: { id: clubId },
      relations: ['socios'],
    });
    if (!club) {
      throw new BusinessLogicException(
        unknownMsg('club'),
        BusinessError.NOT_FOUND,
      );
    }
    for (const s of socios) {
      const socioEncontrado = await this.socioRepository.findOne({
        where: { id: s.id },
      });
      if (!socioEncontrado) {
        throw new BusinessLogicException(
          unknownMsg('club'),
          BusinessError.NOT_FOUND,
        );
      }
    }
    club.sociosList = socios;
    await this.clubRepository.save(club);
  }
}
