import { Router } from 'express';

// controllers
import { PortaisController } from './controller/PortaisController';
import { GestoresController } from './controller/GestoresController';
import { SecretariosController } from './controller/SecretariosController';
import { StatusController } from './controller/StatusController';

const routes = Router();

const portaisController = new PortaisController();
const gestoresController = new GestoresController();
const secretariosController = new SecretariosController();
const statusController = new StatusController();

// Portais
routes.post('/portais', portaisController.create);
routes.get('/portais', portaisController.list);
routes.get('/portais/:nomeBase', portaisController.show);
routes.put('/portais/:nomeBase', portaisController.update);
routes.delete('/portais/:nomeBase', portaisController.delete);

// Gestores
routes.post('/:nomeBase/gestores', gestoresController.create);
routes.put('/:nomeBase/gestores', gestoresController.update);

// Secretarios
routes.post('/:nomeBase/secretarios', secretariosController.create);
routes.put('/:nomeBase/secretarios', secretariosController.update);

// Status
routes.post('/status', statusController.create);
routes.get('/status', statusController.list);

export { routes };
