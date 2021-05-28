import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Ativo } from './Ativo';

@Entity('imagensAtivos')
class ImagemAtivo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @OneToOne(() => Ativo, (ativo) => ativo.imagemAtivo)
  @JoinColumn({ name: 'ativo_id' })
  ativo: Ativo;
}

export { ImagemAtivo };
