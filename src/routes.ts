import { Router } from 'express';

// controllers
import { PortaisController } from './controller/PortaisController';

const routes = Router();

const portaisController = new PortaisController();

routes.post('/portais', portaisController.create);

export { routes };
