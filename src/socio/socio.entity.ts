import { Entity, Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClubEntity } from '../club/club.entity';

@Entity()
export class SocioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  fechaNacimiento: Date;

  @ManyToMany(() => ClubEntity, (club) => club.sociosList)
  clubesList: ClubEntity[];
}
