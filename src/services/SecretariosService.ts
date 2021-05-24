import { getCustomRepository } from 'typeorm';
import { SecretariosRepository } from '../repositories/SecretariosRepository';

interface ISecretariosCreate {
  nomeBase: string;
  nome: string;
  email: string;
  telefone: string;
}

class SecretariosService {
  async create({ nomeBase, nome, email, telefone }: ISecretariosCreate) {
    const secretariosRepositorio = getCustomRepository(SecretariosRepository);

    const secretarioJaExiste = await secretariosRepositorio.findOne({
      nomeBase,
    });

    if (secretarioJaExiste) {
      throw new Error('Este portal já possui um secretário cadastrado!');
    }

    const secretario = secretariosRepositorio.create({
      nomeBase,
      nome,
      email,
      telefone,
    });

    await secretariosRepositorio.save(secretario);

    return secretario;
  }

  async update({ nomeBase, nome, email, telefone }: ISecretariosCreate) {
    const secretariosRepositorio = getCustomRepository(SecretariosRepository);

    const secretario = await secretariosRepositorio.findOne({ nomeBase });

    secretario.nome = nome || secretario.nome;
    secretario.email = email || secretario.email;
    secretario.telefone = telefone || secretario.telefone;

    await secretariosRepositorio.save(secretario);

    return secretario;
  }
}

export { SecretariosService };
