import Router from 'express';
import PhotoController from './controllers/PhotoController';

const routes = Router();

routes.get('/photo', PhotoController.index);

export default routes;