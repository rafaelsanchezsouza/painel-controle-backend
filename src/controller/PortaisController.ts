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
    const portaisRepository = getRepository(Portal);
    console.log('request.params.nomeBase: ');
    console.log(request.params.nomeBase);
    try {
      const portal = await portaisRepository.find({
        where: { nomeBase: request.params.nomeBase },
      });

      return response.json(portal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const cnpj = request.params.portal_cnpj;
    const { nomeBase, nomenclatura, vencimento, status } = request.body;

    const portaisService = new PortaisService();
    try {
      const novoPortal = await portaisService.update({
        cnpj,
        nomeBase,
        nomenclatura,
        vencimento,
        status,
      });
      return response.json(novoPortal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { PortaisController };
