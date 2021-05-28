import { Request, Response } from 'express';
import { EmpresasService } from '../services/EmpresasService';

class EmpresasController {
  async create(request: Request, response: Response) {
    const { nome, cnpj } = request.body;
    const empresasService = new EmpresasService();
    try {
      const empresa = await empresasService.create({
        nome,
        cnpj,
      });

      return response.json(empresa);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async listAll(request: Request, response: Response) {
    const empresasService = new EmpresasService();
    try {
      const empresas = await empresasService.listAll();
      return response.json(empresas);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async showById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const empresasService = new EmpresasService();
    try {
      const empresa = await empresasService.findById(id);
      return response.json(empresa);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    const { nome, cnpj } = request.body;

    const empresasService = new EmpresasService();
    try {
      const novoPortal = await empresasService.update({
        id,
        nome,
        cnpj,
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
    const empresasService = new EmpresasService();
    try {
      await empresasService.delete(id);
      return response.json({ message: 'Empresa excluida com sucesso' });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { EmpresasController };
