import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import httpStatus from 'http-status';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/v1/user-groups.json';
import routes from './routes';

import ErrorHandler from './middlewares/error-handler';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/docs', swaggerUi.serve);
app.use('/docs', swaggerUi.setup(swaggerDocument));

app.use('/api/v1', routes);

app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json();
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  ErrorHandler(err, req, res);
});

export default app;
