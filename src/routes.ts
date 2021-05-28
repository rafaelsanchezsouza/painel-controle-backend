import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

// controllers
import { EmpresasController } from './controller/EmpresasController';
import { StatusController } from './controller/StatusController';
import { UnidadesController } from './controller/UnidadesController';
import { UsuariosController } from './controller/UsuariosController';
import { AtivosController } from './controller/AtivosController';

const routes = Router();
const upload = multer(uploadConfig);

const empresasController = new EmpresasController();
const statusController = new StatusController();
const unidadesController = new UnidadesController();
const usuariosController = new UsuariosController();
const ativosController = new AtivosController();

// Portais
routes.post('/empresas', empresasController.create);
routes.get('/empresas', empresasController.listAll);
routes.get('/empresas/:id', empresasController.showById);
routes.put('/empresas/:id', empresasController.update);
routes.delete('/empresas/:id', empresasController.delete);

// // Unidades
routes.post('/unidades', unidadesController.create);
routes.get('/unidades', unidadesController.listAll);
routes.get('/unidades/:id', unidadesController.showById);
routes.put('/unidades/:id', unidadesController.update);
routes.delete('/unidades/:id', unidadesController.delete);

// Usuarios
routes.post('/usuarios', usuariosController.create);
routes.get('/usuarios', usuariosController.listAll);
routes.get('/usuarios/:id', usuariosController.showById);
routes.put('/usuarios/:id', usuariosController.update);
routes.delete('/usuarios/:id', usuariosController.delete);

// Ativos;
routes.post('/ativos', upload.single('imagemAtivo'), ativosController.create);
routes.get('/ativos', ativosController.listAll);
routes.get('/ativos/:id', ativosController.showById);
routes.put('/ativos/:id', ativosController.update);
routes.delete('/ativos/:id', ativosController.delete);

// Status
routes.post('/status', statusController.create);
routes.get('/status', statusController.list);

export { routes };
