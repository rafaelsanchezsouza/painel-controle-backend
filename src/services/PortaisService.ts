import { getCustomRepository } from 'typeorm';
import { PortaisRepository } from '../repositories/PortaisRepository';
interface IPortaisCreate {
  cnpj: string;
  nomeBase: string;
  nomenclatura: string;
  vencimento: string;
}

class PortaisService {
  async create({ cnpj, nomeBase, nomenclatura, vencimento }: IPortaisCreate) {
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const usuarioJaExiste = await portaisRepositorio.findOne({ cnpj });

    if (usuarioJaExiste) {
      throw new Error('Portal já existente!');
    }

    const portais = portaisRepositorio.create({
      cnpj,
      nomeBase,
      nomenclatura,
      vencimento,
    });

    await portaisRepositorio.save(portais);

    return portais;
  }
}

export { PortaisService };
