import { Request, Response } from 'express';
import { SecretariosService } from '../services/SecretariosService';

class SecretariosController {
  async create(request: Request, response: Response) {
    const { nome, email, telefone, portal_cnpj } = request.body;

    const secretariosService = new SecretariosService();

    try {
      const secretario = await secretariosService.create({
        nome,
        email,
        telefone,
        portal_cnpj,
      });

      return response.json(secretario);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { SecretariosController };
