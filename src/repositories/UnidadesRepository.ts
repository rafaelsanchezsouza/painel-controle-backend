import { EntityRepository, Repository } from 'typeorm';
import { Unidade } from '../entities/Unidade';

@EntityRepository(Unidade)
class UnidadesRepository extends Repository<Unidade> {}

export { UnidadesRepository };
