import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';
import { Gestor } from './Gestor';
import { Secretario } from './Secretario';

@Entity('portais')
class Portal {
  @PrimaryColumn()
  cnpj: string;

  @Column()
  nomeBase: string;

  @Column()
  nomenclatura: string;

  @Column()
  vencimento: string;

  @OneToOne(() => Gestor, (gestor) => gestor.portal, {
    cascade: ['insert', 'update'],
  })
  gestor: Gestor;

  @OneToOne(() => Secretario, (secretario) => secretario.portal, {
    cascade: ['insert', 'update'],
  })
  secretario: Secretario;
}
export { Portal };
