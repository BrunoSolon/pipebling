// eslint-disable-next-line import/prefer-default-export
export function handleAxiosError(err) {
  const error = {
    url: err.config && err.config.url,
    method: err.config && err.config.method,
    headers: err.config && err.config.headers,
    data: err.config && err.config.data,
    response: null,
    status: null,
    message: err.message,
  };

  if (err.response) {
    error.response = err.response.data;
    error.status = err.response.status;
  }

  return error;
}
