import httpStatus from 'http-status';

import IntegrationError from '../utils/errors/integration';

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 */
export default function errorHandler(err, req, res) {
  if (err.errors && err.errors.length > 0) {
    const error = err.errors.pop();

    res.status(httpStatus.BAD_REQUEST).json({
      error: error.msg,
      options: error.param,
    });
  } else if (err instanceof IntegrationError) {
    const status = err.err && err.err.status ? err.err.status : httpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({ message: err.msgErr, code: err.code, err: err.err });
  } else {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
