import { Router } from 'express';

// controllers
import { PortaisController } from './controller/PortaisController';
import { GestoresController } from './controller/GestoresController';
import { SecretariosController } from './controller/SecretariosController';

const routes = Router();

const portaisController = new PortaisController();
const gestoresController = new GestoresController();
const secretariosController = new SecretariosController();

// Portais
routes.post('/portais', portaisController.create);
routes.get('/portais', portaisController.list);
routes.get('/portais/:nomeBase', portaisController.show);
routes.put('/portais/:nomeBase', portaisController.update);

// Gestores
routes.post('/gestores', gestoresController.create);
routes.put('/gestores/:nomeBase', gestoresController.update);

// Secretarios
routes.post('/secretarios', secretariosController.create);
routes.put('/secretarios/:nomeBase', secretariosController.update);

export { routes };
