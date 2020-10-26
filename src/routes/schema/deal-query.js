import moment from 'moment';

const DealQuery = {
  startDate: {
    in: 'query',
    isString: true,
    optional: true,
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
    },
    custom: {
      options: (val) => val && moment(val, 'YYYY-MM-DD', true).isValid(),
    },
    errorMessage: 'invalid_start_date',
  },
  amount: {
    in: 'query',
    isNumeric: true,
    optional: true,
    errorMessage: 'amount_must_be_a_number',
  },
};

const DealDbQuery = {
  page: {
    in: 'query',
    isNumeric: true,
    optional: true,
    errorMessage: 'invalid_page_input',
  },
  limit: {
    in: 'query',
    isNumeric: true,
    optional: true,
    errorMessage: 'invalid_limit_input',
  },
};

export {
  DealQuery,
  DealDbQuery,
};
