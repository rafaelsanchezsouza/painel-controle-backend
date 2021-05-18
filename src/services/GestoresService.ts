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

    const gestorJaExiste = await gestoresRepositorio.findOne({ nome });

    if (gestorJaExiste) {
      throw new Error('Gestor já existente!');
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
}

export { GestoresService };
