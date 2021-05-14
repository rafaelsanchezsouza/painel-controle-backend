import { EntityRepository, Repository } from 'typeorm';
import { Portal } from '../entities/Portal';

@EntityRepository(Portal)
class PortaisRepository extends Repository<Portal> {}

export { PortaisRepository };
