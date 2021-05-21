import { getCustomRepository } from 'typeorm';
import { GestoresRepository } from '../repositories/GestoresRepository';

interface IGestoresCreate {
  nome: string;
  email: string;
  telefone: string;
  portal_cnpj: string;
}

class GestoresService {
  async create({ nome, email, telefone, portal_cnpj }: IGestoresCreate) {
    const gestoresRepositorio = getCustomRepository(GestoresRepository);

    const gestorJaExiste = await gestoresRepositorio.find({
      where: { portal_cnpj: portal_cnpj },
    });

    if (gestorJaExiste) {
      throw new Error('Este portal já possui um gestor cadastrado!');
    }

    const gestor = gestoresRepositorio.create({
      nome,
      email,
      telefone,
      portal_cnpj,
    });

    await gestoresRepositorio.save(gestor);

    return gestor;
  }
  async update({ nome, email, telefone, portal_cnpj }: IGestoresCreate) {
    const gestoresRepositorio = getCustomRepository(GestoresRepository);

    const gestor = await gestoresRepositorio.findOne({ portal_cnpj });

    gestor.nome = nome || gestor.nome;
    gestor.email = email || gestor.email;
    gestor.telefone = telefone || gestor.telefone;

    await gestoresRepositorio.save(gestor);

    return gestor;
  }
}

export { GestoresService };
