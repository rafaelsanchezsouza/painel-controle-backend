import { Request, Response } from 'express';
import { GestoresService } from '../services/GestoresService';

class GestoresController {
  async create(request: Request, response: Response) {
    const { nomeBase, nome, email, telefone } = request.body;

    const gestoresService = new GestoresService();

    try {
      const gestor = await gestoresService.create({
        nomeBase,
        nome,
        email,
        telefone,
      });

      return response.json(gestor);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const nomeBase = request.params.nomeBase;
    const { nome, email, telefone } = request.body;

    const gestoresService = new GestoresService();
    try {
      const novoGestor = await gestoresService.update({
        nomeBase,
        nome,
        email,
        telefone,
      });
      return response.json(novoGestor);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { GestoresController };
