import { Request, Response } from 'express';
import { PortaisService } from '../services/PortaisService';

class PortaisController {
  async create(request: Request, response: Response) {
    const { cnpj, nomeBase, nomenclatura, vencimento } = request.body;

    const portaisService = new PortaisService();

    const portais = await portaisService.create({
      cnpj,
      nomeBase,
      nomenclatura,
      vencimento,
    });

    return response.json(portais);
  }
}

export { PortaisController };
