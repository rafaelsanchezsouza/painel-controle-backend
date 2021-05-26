import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
class Status {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @Column()
  value: string;
}
export { Status };
