import { Request, Response } from 'express';
import { PortaisService } from '../services/PortaisService';

class PortaisController {
  async create(request: Request, response: Response) {
    const { cnpj, nomeBase, nomenclatura, vencimento, status } = request.body;

    const portaisService = new PortaisService();

    try {
      const portal = await portaisService.create({
        cnpj,
        nomeBase,
        nomenclatura,
        vencimento,
        status,
      });

      return response.json(portal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { PortaisController };
