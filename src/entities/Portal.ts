import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}

export { Portal };
