import {
  Entity,
  Column,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ativo } from './Ativo';
import { Empresa } from './Empresa';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  departamento: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.usuarios)
  @JoinColumn({ name: 'empresa_id' })
  empresa: Empresa;

  @OneToMany(() => Ativo, (ativo) => ativo.usuario, {
    cascade: ['insert', 'update'],
  })
  ativos: Ativo[];
}

export { Usuario };
