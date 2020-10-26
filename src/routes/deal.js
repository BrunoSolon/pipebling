import express from 'express';
import DealController from '../controllers/deal-controller';
import checkSchema from '../middlewares/check-schema';
import { DealDbQuery } from './schema/deal-query';

const Router = express.Router();

Router.get('/',
  checkSchema(DealDbQuery),
  DealController);

export default Router;
