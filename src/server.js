import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import httpStatus from 'http-status';
import routes from './routes';

import ErrorHandler from './middlewares/error-handler';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', routes);

app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json();
});

app.use((err, req, res, next) => {
  ErrorHandler(err, req, res);
});

export default app;
