/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocioEntity } from './socio.entity';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';
import { unknownMsg } from '../shared/utils/validation.utils';

@Injectable()
export class SocioService {
  constructor(
    @InjectRepository(SocioEntity)
    private socioRepository: Repository<SocioEntity>,
  ) {}

  async findAll(): Promise<SocioEntity[]> {
    return this.socioRepository.find();
  }

  async findOne(id: number): Promise<SocioEntity> {
    const socio = await this.socioRepository.findOne({ where: { id } });
    if (!socio) {
      throw new BusinessLogicException(
        unknownMsg('socio'),
        BusinessError.NOT_FOUND,
      );
    }
    return socio;
  }

  async create(socio: SocioEntity): Promise<SocioEntity> {
    return await this.socioRepository.save(socio);
  }

  async update(id: number, socio: SocioEntity): Promise<SocioEntity> {
    if (!socio.email.includes('@')) {
      throw new BusinessLogicException(
        unknownMsg('socio'),
        BusinessError.NOT_FOUND,
      );
    }
    const socioPersistido: SocioEntity = await this.socioRepository.findOne({
      where: { id },
    });
    if (!socioPersistido) {
      throw new BusinessLogicException(
        unknownMsg('socio'),
        BusinessError.NOT_FOUND,
      );
    }
    return await this.socioRepository.save({ ...socioPersistido, ...socio });
  }

  async delete(id: number): Promise<void> {
    const socio = await this.socioRepository.findOne({ where: { id } });
    if (!socio) {
      throw new BusinessLogicException(
        unknownMsg('socio'),
        BusinessError.NOT_FOUND,
      );
    }
    await this.socioRepository.delete(id);
  }
}
