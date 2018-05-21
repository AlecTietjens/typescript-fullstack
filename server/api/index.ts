import * as express from 'express';
import { router as hello } from './hello';

export const api: express.Router = express.Router();

api
  .use('/hello', hello);

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
