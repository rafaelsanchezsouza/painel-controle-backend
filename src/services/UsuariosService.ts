import { getCustomRepository, Repository } from 'typeorm';
import { Empresa } from '../entities/Empresa';
import { Usuario } from '../entities/Usuario';
import { UsuariosRepository } from '../repositories/UsuariosRepository';

interface IUsuariosCreate {
  nome: string;
  email: string;
  telefone: string;
  departamento: string;
  empresa: Empresa;
}

interface IUsuariosUpdate {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  departamento: string;
  empresa: Empresa;
}

class UsuariosService {
  private usuariosRepository: Repository<Usuario>;

  constructor() {
    this.usuariosRepository = getCustomRepository(UsuariosRepository);
  }
  async create({
    nome,
    email,
    telefone,
    departamento,
    empresa,
  }: IUsuariosCreate) {
    const usuario = this.usuariosRepository.create({
      nome,
      email,
      telefone,
      departamento,
      empresa,
    });

    await this.usuariosRepository.save(usuario);

    return usuario;
  }
  async update({
    id,
    nome,
    email,
    telefone,
    departamento,
    empresa,
  }: IUsuariosUpdate) {
    const usuario = await this.usuariosRepository.findOne({ id });

    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;
    usuario.telefone = telefone || usuario.telefone;
    usuario.departamento = departamento || usuario.departamento;
    usuario.empresa = empresa || usuario.empresa;

    await this.usuariosRepository.save(usuario);

    return usuario;
  }

  async listAll() {
    const usuarios = await this.usuariosRepository.find();

    return usuarios;
  }

  async findById(id: number) {
    const usuarios = await this.usuariosRepository.find({
      where: { id },
    });

    return usuarios;
  }
  async delete(id: number) {
    const usuario = await this.usuariosRepository.findOne({ id });

    await this.usuariosRepository.delete(usuario);

    return usuario;
  }
}

export { UsuariosService };
