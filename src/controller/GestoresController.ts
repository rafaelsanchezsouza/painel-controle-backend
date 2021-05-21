import { Request, Response } from 'express';
import { GestoresService } from '../services/GestoresService';

class GestoresController {
  async create(request: Request, response: Response) {
    const { nome, email, telefone, portal_cnpj } = request.body;

    const gestoresService = new GestoresService();

    try {
      const gestor = await gestoresService.create({
        nome,
        email,
        telefone,
        portal_cnpj,
      });

      return response.json(gestor);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const portal_cnpj = request.params.portal_cnpj;
    const { nome, email, telefone } = request.body;

    const gestoresService = new GestoresService();
    try {
      const novoGestor = await gestoresService.update({
        nome,
        email,
        telefone,
        portal_cnpj,
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
