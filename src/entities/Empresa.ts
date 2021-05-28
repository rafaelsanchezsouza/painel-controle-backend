import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Usuario } from './Usuario';
import { Unidade } from './Unidade';

@Entity('empresas')
class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Unidade, (unidade) => unidade.empresa, {
    cascade: ['insert', 'update'],
  })
  unidade: Unidade;

  @OneToMany(() => Usuario, (usuario) => usuario.empresa, {
    cascade: ['insert', 'update'],
  })
  usuario: Usuario;
}
export { Empresa };
