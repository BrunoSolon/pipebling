import express from 'express';
import httpStatus from 'http-status';

const Router = express.Router();
const startedAt = Date.now();

Router.get('/live', (req, res) => {
  const uptime = Date.now() - startedAt;
  return res.status(httpStatus.OK).json({ status: 'A API está ok', uptime });
});

Router.use('/integration', require('./integration').default);
Router.use('/deal', require('./deal').default);

export default Router;
