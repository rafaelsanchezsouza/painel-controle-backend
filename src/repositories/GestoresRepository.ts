import { EntityRepository, Repository } from 'typeorm';
import { Gestor } from '../entities/Gestor';

@EntityRepository(Gestor)
class GestoresRepository extends Repository<Gestor> {}

export { GestoresRepository };
