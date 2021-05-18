import { getCustomRepository } from 'typeorm';
import { SecretariosRepository } from '../repositories/SecretariosRepository';

interface ISecretariosCreate {
  nome: string;
  email: string;
  telefone: string;
  portal_cnpj: string;
}

class SecretariosService {
  async create({ nome, email, telefone, portal_cnpj }: ISecretariosCreate) {
    const secretariosRepositorio = getCustomRepository(SecretariosRepository);

    const secretarioJaExiste = await secretariosRepositorio.findOne({ nome });

    if (secretarioJaExiste) {
      throw new Error('Gestor já existente!');
    }

    const secretario = secretariosRepositorio.create({
      nome,
      email,
      telefone,
      portal_cnpj,
    });

    await secretariosRepositorio.save(secretario);

    return secretario;
  }
}

export { SecretariosService };
