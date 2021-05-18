import { EntityRepository, Repository } from 'typeorm';
import { Secretario } from '../entities/Secretario';

@EntityRepository(Secretario)
class SecretariosRepository extends Repository<Secretario> {}

export { SecretariosRepository };
