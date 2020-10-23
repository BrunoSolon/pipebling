import httpStatus from 'http-status';

export default function errorHandler(err, req, res) {
  if (err.errors && err.errors.length > 0) {
    const error = err.errors.pop();

    res.status(httpStatus.BAD_REQUEST).json({
      error: error.msg,
      options: error.param,
    });
  } else {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
