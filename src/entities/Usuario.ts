import {
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Empresa } from './Empresa';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Column()
  empresa_id: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.usuario)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;
}

export { Usuario };
