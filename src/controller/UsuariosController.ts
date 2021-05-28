import { Request, Response } from 'express';
import { UsuariosService } from '../services/UsuariosService';

class UsuariosController {
  async create(request: Request, response: Response) {
    const { nome, email, telefone, departamento, empresa } = request.body;

    const usuariosService = new UsuariosService();
    try {
      const usuario = await usuariosService.create({
        nome,
        email,
        telefone,
        departamento,
        empresa,
      });

      return response.json(usuario);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(request: Request, response: Response) {
    const usuariosService = new UsuariosService();
    try {
      const usuarios = await usuariosService.listAll();
      return response.json(usuarios);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async showById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const usuariosService = new UsuariosService();
    try {
      const usuario = await usuariosService.findById(id);
      return response.json(usuario);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const { nome, email, telefone, departamento, empresa } = request.body;

    const usuariosService = new UsuariosService();
    try {
      const novoPortal = await usuariosService.update({
        id,
        nome,
        email,
        telefone,
        departamento,
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
    const usuariosService = new UsuariosService();
    try {
      await usuariosService.delete(id);
      return response.json({ message: 'Usuario excluida com sucesso' });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { UsuariosController };
