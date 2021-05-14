import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { PortaisRepository } from '../repositories/PortaisRepository';

class PortaisController {
  async create(request: Request, response: Response) {
    const { cnpj, nomeBase, nomenclatura, vencimento } = request.body;

    const portaisRepositorio = getCustomRepository(PortaisRepository);

    const portais = portaisRepositorio.create({
      cnpj,
      nomeBase,
      nomenclatura,
      vencimento,
    });

    await portaisRepositorio.save(portais);

    return response.json(portais);
  }
}

export { PortaisController };
