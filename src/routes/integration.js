import express from 'express';
import IntegrationController from '../controllers/integration-controller';

const Router = express.Router();

Router.get('/deal/won', IntegrationController);

export default Router;
