import express from 'express';
import DealController from '../controllers/deal-controller';

const Router = express.Router();

Router.get('/', DealController);

export default Router;
