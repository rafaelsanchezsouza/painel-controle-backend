import { getCustomRepository } from 'typeorm';
import { GestoresRepository } from '../repositories/GestoresRepository';
import { PortaisRepository } from '../repositories/PortaisRepository';

interface IGestoresCreate {
  nomeBase: string;
  nome: string;
  email: string;
  telefone: string;
}

class GestoresService {
  async create({ nomeBase, nome, email, telefone }: IGestoresCreate) {
    const gestoresRepositorio = getCustomRepository(GestoresRepository);
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portalJaExiste = await portaisRepositorio.findOne({
      nomeBase,
    });

    if (!portalJaExiste) {
      throw new Error('Portal não encontrado!');
    }

    const gestorJaExiste = await gestoresRepositorio.findOne({
      nomeBase,
    });

    if (gestorJaExiste) {
      throw new Error('Este portal já possui um gestor cadastrado!');
    }

    const gestor = gestoresRepositorio.create({
      nomeBase,
      nome,
      email,
      telefone,
    });

    await gestoresRepositorio.save(gestor);

    return gestor;
  }
  async update({ nomeBase, nome, email, telefone }: IGestoresCreate) {
    const gestoresRepositorio = getCustomRepository(GestoresRepository);

    const gestor = await gestoresRepositorio.findOne({ nomeBase });

    gestor.nome = nome || gestor.nome;
    gestor.email = email || gestor.email;
    gestor.telefone = telefone || gestor.telefone;

    await gestoresRepositorio.save(gestor);

    return gestor;
  }
}

export { GestoresService };
