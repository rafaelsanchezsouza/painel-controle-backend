import { EntityRepository, Repository } from 'typeorm';
import { Ativo } from '../entities/Ativo';

@EntityRepository(Ativo)
class AtivosRepository extends Repository<Ativo> {}

export { AtivosRepository };
