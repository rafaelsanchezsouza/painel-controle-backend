import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ImagemAtivo } from './ImagemAtivo';
import { Unidade } from './Unidade';
import { Usuario } from './Usuario';

@Entity('ativos')
class Ativo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  modelo: string;

  @Column()
  descricao: string;

  @Column()
  status: string;

  @Column()
  saude: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => ImagemAtivo, (imagem) => imagem.ativo, {
    cascade: ['insert', 'update'],
  })
  imagemAtivo: ImagemAtivo;

  @ManyToOne(() => Unidade, (unidade) => unidade.ativo)
  @JoinColumn({ name: 'unidade_id' })
  unidade: Unidade;

  @ManyToOne(() => Usuario, (usuario) => usuario.ativo)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}

export { Ativo };
