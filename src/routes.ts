import { Router } from 'express';

// controllers
import { PortaisController } from './controller/PortaisController';
import { GestoresController } from './controller/GestoresController';
import { SecretariosController } from './controller/SecretariosController';

const routes = Router();

const portaisController = new PortaisController();
const gestoresController = new GestoresController();
const secretariosController = new SecretariosController();

routes.post('/portais', portaisController.create);
routes.get('/portais', portaisController.list);
routes.post('/gestores', gestoresController.create);
routes.post('/secretarios', secretariosController.create);

export { routes };
