import { EntityRepository, Repository } from 'typeorm';
import { ImagemAtivo } from '../entities/ImagemAtivo';

@EntityRepository(ImagemAtivo)
class ImagensAtivosRepository extends Repository<ImagemAtivo> {}

export { ImagensAtivosRepository };
