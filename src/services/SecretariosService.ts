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

    const secretarioJaExiste = await secretariosRepositorio.find({
      where: { portal_cnpj: portal_cnpj },
    });

    if (secretarioJaExiste) {
      throw new Error('Este portal já possui um secretário cadastrado!');
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

  async update({ nome, email, telefone, portal_cnpj }: ISecretariosCreate) {
    const secretariosRepositorio = getCustomRepository(SecretariosRepository);

    const secretario = await secretariosRepositorio.findOne({ portal_cnpj });

    secretario.nome = nome || secretario.nome;
    secretario.email = email || secretario.email;
    secretario.telefone = telefone || secretario.telefone;

    await secretariosRepositorio.save(secretario);

    return secretario;
  }
}

export { SecretariosService };
