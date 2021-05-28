import { getCustomRepository, Repository } from 'typeorm';
import { Empresa } from '../entities/Empresa';
import { Unidade } from '../entities/Unidade';
import { UnidadesRepository } from '../repositories/UnidadesRepository';

interface IUnidadesCreate {
  nome: string;
  endereco: string;
  empresa: Empresa;
}

interface IUnidadesUpdate {
  id: number;
  nome: string;
  endereco: string;
  empresa: Empresa;
}

class UnidadesService {
  private unidadesRepository: Repository<Unidade>;

  constructor() {
    this.unidadesRepository = getCustomRepository(UnidadesRepository);
  }
  async create({ nome, endereco, empresa }: IUnidadesCreate) {
    const unidade = this.unidadesRepository.create({
      nome,
      endereco,
      empresa,
    });

    await this.unidadesRepository.save(unidade);

    return unidade;
  }
  async update({ id, nome, endereco, empresa }: IUnidadesUpdate) {
    const unidade = await this.unidadesRepository.findOne({ id });

    unidade.nome = nome || unidade.nome;
    unidade.endereco = endereco || unidade.endereco;
    unidade.empresa = empresa || unidade.empresa;

    await this.unidadesRepository.save(unidade);

    return unidade;
  }

  async listAll() {
    const unidades = await this.unidadesRepository.find({
      relations: ['ativos'],
    });

    return unidades;
  }

  async findById(id: number) {
    const unidades = await this.unidadesRepository.find({
      where: { id },
    });

    return unidades;
  }
  async delete(id: number) {
    const unidade = await this.unidadesRepository.findOne({ id });

    await this.unidadesRepository.delete(unidade);

    return unidade;
  }
}

export { UnidadesService };
