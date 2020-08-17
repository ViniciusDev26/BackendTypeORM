import Router from 'express';
import PhotoController from './controllers/PhotoController';

const routes = Router();

routes.get('/photo', PhotoController.index);
routes.get('/', PhotoController.create);

export default routes;