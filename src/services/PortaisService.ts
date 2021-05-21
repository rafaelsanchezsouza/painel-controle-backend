import { getCustomRepository } from 'typeorm';
import { PortaisRepository } from '../repositories/PortaisRepository';
interface IPortaisCreate {
  cnpj: string;
  nomeBase: string;
  nomenclatura: string;
  vencimento: string;
  status: string;
}

class PortaisService {
  async create({
    cnpj,
    nomeBase,
    nomenclatura,
    vencimento,
    status,
  }: IPortaisCreate) {
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portalJaExiste = await portaisRepositorio.findOne({ cnpj });

    if (portalJaExiste) {
      throw new Error('Portal já existente!');
    }

    const portais = portaisRepositorio.create({
      cnpj,
      nomeBase,
      nomenclatura,
      vencimento,
      status,
    });

    await portaisRepositorio.save(portais);

    return portais;
  }
  async update({
    cnpj,
    nomeBase,
    nomenclatura,
    vencimento,
    status,
  }: IPortaisCreate) {
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portal = await portaisRepositorio.findOne({ cnpj });

    portal.nomeBase = nomeBase || portal.nomeBase;
    portal.nomenclatura = nomenclatura || portal.nomenclatura;
    portal.vencimento = vencimento || portal.vencimento;
    portal.status = status || portal.status;

    await portaisRepositorio.save(portal);

    return portal;
  }
}

export { PortaisService };
