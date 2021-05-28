import { Request, Response } from 'express';
import { AtivosService } from '../services/AtivosService';

class AtivosController {
  async create(request: Request, response: Response) {
    const {
      nome,
      modelo,
      descricao,
      status,
      saude,
      unidade,
      usuario,
    } = request.body;

    console.log('Antes do Request');

    const requestImage = request.file.filename;
    console.log('Depois do Request');
    console.log(request.file);
    const imagemAtivo = { path: requestImage };

    console.log('imagemAtivo');
    console.log(imagemAtivo);

    const ativosService = new AtivosService();
    try {
      const ativo = await ativosService.create({
        nome,
        modelo,
        descricao,
        status,
        saude,
        imagemAtivo,
        unidade,
        usuario,
      });

      return response.json(ativo);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(request: Request, response: Response) {
    const ativosService = new AtivosService();
    try {
      const ativos = await ativosService.listAll();
      return response.json(ativos);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async showById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const ativosService = new AtivosService();
    try {
      const ativo = await ativosService.findById(id);
      return response.json(ativo);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const {
      nome,
      modelo,
      descricao,
      status,
      saude,
      unidade,
      usuario,
    } = request.body;

    const ativosService = new AtivosService();
    try {
      const novoPortal = await ativosService.update({
        id,
        nome,
        modelo,
        descricao,
        status,
        saude,
        unidade,
        usuario,
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
    const ativosService = new AtivosService();
    try {
      await ativosService.delete(id);
      return response.json({ message: 'Ativo excluida com sucesso' });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { AtivosController };
