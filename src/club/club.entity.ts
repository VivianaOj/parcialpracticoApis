import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SocioEntity } from '../socio/socio.entity';

@Entity()
export class ClubEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaFundacion: Date;

  @Column()
  imagen: string;

  @Column({ length: 100 })
  descripcion: string;

  @ManyToMany(() => SocioEntity, (socio) => socio.clubesList)
  @JoinTable()
  sociosList: SocioEntity[];
}
