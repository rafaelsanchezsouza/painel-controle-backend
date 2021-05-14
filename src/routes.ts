import { Router } from 'express';
import { getCustomRepository, RepositoryNotTreeError } from 'typeorm';
import { PortaisRepository } from './repositories/PortaisRepository';

const routes = Router();

routes.post('/portais', async (request, response) => {
  const { cnpj, nomeBase, nomenclatura, vencimento } = request.body;

  const portaisRepositorio = getCustomRepository(PortaisRepository);

  const portais = portaisRepositorio.create({
    cnpj,
    nomeBase,
    nomenclatura,
    vencimento,
  });

  await portaisRepositorio.save(portais);

  return response.json(portais);
});

export { routes };
