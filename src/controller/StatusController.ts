import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Status } from '../entities/Status';
import { StatusService } from '../services/StatusService';

class StatusController {
  async create(request: Request, response: Response) {
    const { label, value } = request.body;

    const statusService = new StatusService();
    try {
      const status = await statusService.create({
        label,
        value,
      });

      return response.json(status);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async list(request: Request, response: Response) {
    const statusRepository = getRepository(Status);

    try {
      const status = await statusRepository.find();
      return response.json(status);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { StatusController };
