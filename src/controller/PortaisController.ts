import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Portal } from '../entities/Portal';
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

  async list(request: Request, response: Response) {
    const portaisRepository = getRepository(Portal);

    try {
      const portais = await portaisRepository.find({
        relations: ['gestor', 'secretario'],
      });
      return response.json(portais);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async show(request: Request, response: Response) {
    const nomeBaseRequest = request.params;
    console.log('request.params: ');
    console.log(request.params);
    const portaisRepository = getRepository(Portal);

    try {
      const portal = await portaisRepository.find({
        where: nomeBaseRequest,
      });
      console.log(portal);
      return response.json(portal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { PortaisController };
