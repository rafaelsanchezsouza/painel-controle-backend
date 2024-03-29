import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Empresa } from './Empresa';
import { Ativo } from './Ativo';

@Entity('unidades')
class Unidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.unidades)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @OneToMany(() => Ativo, (ativo) => ativo.unidade, {
    cascade: ['insert', 'update'],
  })
  ativos: Ativo[];
}
export { Unidade };
