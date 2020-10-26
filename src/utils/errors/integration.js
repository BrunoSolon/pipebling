import ExtendableError from './extendable-error';

export const IntegrationCodeError = {
  ERROR_ON_GET_PIPEDRIVE_DEALS: 'error_on_get_pipedrive_deals',
  ERROR_ON_CREATE_BLING_ORDER: 'error_on_create_bling_order',
};

function buildMsgHuman(err, code) {
  let msg = 'Ocorreu um erro, entre em contato com o suporte.';

  if (code === IntegrationCodeError.ERROR_ON_GET_PIPEDRIVE_DEALS) {
    msg = 'Ocorreu um problema ao buscar as oportunidades no Pipedrive';
  } else if (code === IntegrationCodeError.ERROR_ON_CREATE_BLING_ORDER) {
    msg = 'Ocorreu um problema ao cadastrar a oportunidade no Bling';
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
