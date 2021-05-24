import { getCustomRepository } from 'typeorm';
import { PortaisRepository } from '../repositories/PortaisRepository';
interface IPortaisCreate {
  nomeBase: string;
  cnpj: string;
  nomenclatura: string;
  vencimento: string;
  status: string;
}

class PortaisService {
  async create({
    nomeBase,
    cnpj,
    nomenclatura,
    vencimento,
    status,
  }: IPortaisCreate) {
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portalJaExiste = await portaisRepositorio.findOne({ nomeBase });

    if (portalJaExiste) {
      throw new Error('Portal já existente!');
    }

    const portais = portaisRepositorio.create({
      nomeBase,
      cnpj,
      nomenclatura,
      vencimento,
      status,
    });

    await portaisRepositorio.save(portais);

    return portais;
  }
  async update({
    nomeBase,
    cnpj,
    nomenclatura,
    vencimento,
    status,
  }: IPortaisCreate) {
    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portal = await portaisRepositorio.findOne({ nomeBase });

    portal.cnpj = cnpj || portal.cnpj;
    portal.nomenclatura = nomenclatura || portal.nomenclatura;
    portal.vencimento = vencimento || portal.vencimento;
    portal.status = status || portal.status;

    await portaisRepositorio.save(portal);

    return portal;
  }
}

export { PortaisService };
