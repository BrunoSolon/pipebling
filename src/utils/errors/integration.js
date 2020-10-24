import ExtendableError from './extendable-error';

export const IntegrationCodeError = {
  ERROR_ON_GET_PIPEDRIVE_DEALS: 'error_on_get_pipedrive_deals',
};

function buildMsgHuman(err, code) {
  let msg = 'Ocorreu um erro, entre em contato com o suporte.';

  if (code === IntegrationCodeError.ERROR_ON_GET_PIPEDRIVE_DEALS) {
    msg = 'Ocorreu um problema ao buscar as oportunidades no Pipedrive';
  }

  return msg;
}

export default class IntegrationError extends ExtendableError {
  constructor(err, code) {
    super();
    this.err = err;
    this.msgErr = buildMsgHuman(err, code);
    this.code = code;
  }
}
