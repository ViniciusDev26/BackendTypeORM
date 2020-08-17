import {createConnection} from "typeorm";

import express from 'express';
import routes from './routes';

createConnection().then(connection => {
  const app = express();

  app.use(routes);

  app.listen(3333);
});
