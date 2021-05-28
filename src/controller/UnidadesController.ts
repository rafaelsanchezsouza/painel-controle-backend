import { Request, Response } from 'express';
import { UnidadesService } from '../services/UnidadesService';

class UnidadesController {
  async create(request: Request, response: Response) {
    const { nome, endereco, empresa } = request.body;

    const unidadesService = new UnidadesService();
    try {
      const unidade = await unidadesService.create({
        nome,
        endereco,
        empresa,
      });

      return response.json(unidade);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(request: Request, response: Response) {
    const unidadesService = new UnidadesService();
    try {
      const unidades = await unidadesService.listAll();
      return response.json(unidades);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async showById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const unidadesService = new UnidadesService();
    try {
      const unidade = await unidadesService.findById(id);
      return response.json(unidade);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const { nome, endereco, empresa } = request.body;

    const unidadesService = new UnidadesService();
    try {
      const novoPortal = await unidadesService.update({
        id,
        nome,
        endereco,
        empresa,
      });
      return response.json(novoPortal);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async delete(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const unidadesService = new UnidadesService();
    try {
      await unidadesService.delete(id);
      return response.json({ message: 'Unidade excluida com sucesso' });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { UnidadesController };
