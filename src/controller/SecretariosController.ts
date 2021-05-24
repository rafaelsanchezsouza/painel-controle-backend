import { Request, Response } from 'express';
import { SecretariosService } from '../services/SecretariosService';

class SecretariosController {
  async create(request: Request, response: Response) {
    const { nomeBase, nome, email, telefone } = request.body;

    const secretariosService = new SecretariosService();

    try {
      const secretario = await secretariosService.create({
        nomeBase,
        nome,
        email,
        telefone,
      });

      return response.json(secretario);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
  async update(request: Request, response: Response) {
    const nomeBase = request.params.nomeBase;
    const { nome, email, telefone } = request.body;

    const secretariosService = new SecretariosService();
    try {
      const novoSecretario = await secretariosService.update({
        nomeBase,
        nome,
        email,
        telefone,
      });
      return response.json(novoSecretario);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { SecretariosController };
