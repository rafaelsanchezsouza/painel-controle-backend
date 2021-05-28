import { getCustomRepository, Repository } from 'typeorm';
import { Ativo } from '../entities/Ativo';
import { Unidade } from '../entities/Unidade';
import { Usuario } from '../entities/Usuario';
import { AtivosRepository } from '../repositories/AtivosRepository';

interface IAtivosCreate {
  nome: string;
  modelo: string;
  descricao: string;
  status: string;
  saude: string;
  imagemAtivo: { path: string };
  unidade: Unidade;
  usuario: Usuario;
}

interface IAtivosUpdate {
  id: number;
  nome: string;
  modelo: string;
  descricao: string;
  status: string;
  saude: string;
  unidade: Unidade;
  usuario: Usuario;
}

class AtivosService {
  private ativosRepository: Repository<Ativo>;

  constructor() {
    this.ativosRepository = getCustomRepository(AtivosRepository);
  }
  async create({
    nome,
    modelo,
    descricao,
    status,
    saude,
    imagemAtivo,
    unidade,
    usuario,
  }: IAtivosCreate) {
    const ativo = this.ativosRepository.create({
      nome,
      modelo,
      descricao,
      status,
      saude,
      imagemAtivo,
      unidade,
      usuario,
    });

    await this.ativosRepository.save(ativo);

    return ativo;
  }
  async update({
    id,
    nome,
    modelo,
    descricao,
    status,
    saude,
    unidade,
    usuario,
  }: IAtivosUpdate) {
    const ativo = await this.ativosRepository.findOne({ id });

    ativo.nome = nome || ativo.nome;
    ativo.modelo = modelo || ativo.modelo;
    ativo.descricao = descricao || ativo.descricao;
    ativo.status = status || ativo.status;
    ativo.saude = saude || ativo.saude;
    ativo.unidade = unidade || ativo.unidade;
    ativo.usuario = usuario || ativo.usuario;

    await this.ativosRepository.save(ativo);

    return ativo;
  }

  async listAll() {
    const ativos = await this.ativosRepository.find();

    return ativos;
  }

  async findById(id: number) {
    const ativos = await this.ativosRepository.find({
      where: { id },
    });

    return ativos;
  }
  async delete(id: number) {
    const ativo = await this.ativosRepository.findOne({ id });

    await this.ativosRepository.delete(ativo);

    return ativo;
  }
}

export { AtivosService };
