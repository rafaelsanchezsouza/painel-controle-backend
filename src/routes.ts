import { Router } from 'express';

// controllers
import { EmpresasController } from './controller/EmpresasController';
import { StatusController } from './controller/StatusController';

const routes = Router();

const empresasController = new EmpresasController();
const statusController = new StatusController();

// Portais
routes.post('/empresas', empresasController.create);
routes.get('/empresas', empresasController.listAll);
routes.get('/empresas/:id', empresasController.showById);
routes.put('/empresas/:id', empresasController.update);
routes.delete('/empresas/:id', empresasController.delete);

// // Gestores
// routes.post('/:nomeBase/gestores', gestoresController.create);
// routes.put('/:nomeBase/gestores', gestoresController.update);

// // Secretarios
// routes.post('/:nomeBase/secretarios', secretariosController.create);
// routes.put('/:nomeBase/secretarios', secretariosController.update);

// Status
routes.post('/status', statusController.create);
routes.get('/status', statusController.list);

export { routes };
