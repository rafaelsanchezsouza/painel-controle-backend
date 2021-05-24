import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Portal } from './Portal';

@Entity('secretarios')
class Secretario {
  @PrimaryColumn()
  nomeBase: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Portal, (portal) => portal.secretario)
  @JoinColumn({ name: 'nomeBase' })
  portal: Portal;
}

export { Secretario };
