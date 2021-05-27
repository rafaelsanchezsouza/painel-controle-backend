import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Portal } from '../entities/Portal';
import { PortaisService } from '../services/PortaisService';

class PortaisController {
  async create(request: Request, response: Response) {
    const { nomeBase, cnpj, nomenclatura, vencimento, status } = request.body;

    const portaisService = new PortaisService();
    try {
      const portal = await portaisService.create({
        nomeBase,
        cnpj,
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
    try {
      const nomeBase = request.params.nomeBase;
      const portal = await portaisRepository.find({
        where: { nomeBase: nomeBase },
        relations: ['gestor', 'secretario'],
      });

      return response.json(portal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const nomeBase = request.params.nomeBase;
    const { cnpj, nomenclatura, vencimento, status } = request.body;

    const portaisService = new PortaisService();
    try {
      const novoPortal = await portaisService.update({
        nomeBase,
        cnpj,
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

  async delete(request: Request, response: Response) {
    const nomeBase = request.params.nomeBase;
    const portaisRepositorio = getRepository(Portal);
    try {
      const portal = await portaisRepositorio.findOne({ nomeBase });

      await portaisRepositorio.delete(portal);

      return response.json({ message: 'Portal excluido com sucesso' });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { PortaisController };
