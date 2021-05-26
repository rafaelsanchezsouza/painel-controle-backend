import { getCustomRepository } from 'typeorm';
import { StatusRepository } from '../repositories/StatusRepository';
interface IStatusCreate {
  label: string;
  value: string;
}

class StatusService {
  async create({ label, value }: IStatusCreate) {
    const statusRepositorio = getCustomRepository(StatusRepository);

    const statusJaExiste = await statusRepositorio.findOne({ label });

    if (statusJaExiste) {
      throw new Error('Status já existente!');
    }

    const status = statusRepositorio.create({
      label,
      value,
    });

    await statusRepositorio.save(status);

    return status;
  }
}

export { StatusService };
