import express from 'express';
import httpStatus from 'http-status';

const Router = express.Router();
const startedAt = Date.now();

Router.get('/live', (req, res) => {
  const uptime = Date.now() - startedAt;
  return res.status(httpStatus.OK).json({ status: 'A API está up', uptime });
});

export default Router;
