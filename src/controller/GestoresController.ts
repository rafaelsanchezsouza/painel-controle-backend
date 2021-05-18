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
        portal_cnpj
      });

      return response.json(gestor);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { GestoresController };
