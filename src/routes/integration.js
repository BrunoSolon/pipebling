import express from 'express';
import IntegrationController from '../controllers/integration-controller';
import checkSchema from '../middlewares/check-schema';
import dealQuery from './schema/deal-query';

const Router = express.Router();

Router.get('/deal/won',
  checkSchema(dealQuery),
  IntegrationController);

export default Router;
