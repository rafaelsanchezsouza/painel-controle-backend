import { getCustomRepository, Repository } from 'typeorm';
import { Empresa } from '../entities/Empresa';
import { EmpresasRepository } from '../repositories/EmpresasRepository';

interface IEmpresasCreate {
  nome: string;
  cnpj: string;
}

interface IEmpresasUpdate {
  id: number;
  nome: string;
  cnpj: string;
}

class EmpresasService {
  private empresasRepository: Repository<Empresa>;

  constructor() {
    this.empresasRepository = getCustomRepository(EmpresasRepository);
  }
  async create({ nome, cnpj }: IEmpresasCreate) {
    const empresaJaExiste = await this.empresasRepository.findOne({ nome });

    if (empresaJaExiste) {
      throw new Error('Empresa já existente!');
    }

    const empresa = this.empresasRepository.create({
      nome,
      cnpj,
    });

    await this.empresasRepository.save(empresa);

    return empresa;
  }
  async update({ id, nome, cnpj }: IEmpresasUpdate) {
    const empresa = await this.empresasRepository.findOne({ id });

    empresa.cnpj = cnpj || empresa.cnpj;
    empresa.nome = nome || empresa.nome;

    await this.empresasRepository.save(empresa);

    return empresa;
  }

  async listAll() {
    const empresas = await this.empresasRepository.find({
      relations: ['unidades', 'usuarios'],
    });

    return empresas;
  }

  async findById(id: number) {
    const empresas = await this.empresasRepository.find({
      where: { id },
      relations: ['unidades', 'usuarios'],
    });

    return empresas;
  }
  async delete(id: number) {
    const empresa = await this.empresasRepository.findOne({ id });

    await this.empresasRepository.delete(empresa);

    return empresa;
  }
}

export { EmpresasService };
