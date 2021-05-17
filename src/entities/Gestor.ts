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

@Entity('gestores')
class Gestor {
  @PrimaryColumn()
  id: number;

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

  @OneToOne(() => Portal, (portal) => portal.gestor)
  @JoinColumn({ name: 'portal_cnpj' })
  portal: Portal;
}

export { Gestor };
