import moment from 'moment';
import httpStatus from 'http-status';

import PipedriveService from '../services/pipedrive';
import BlingService from '../services/bling';
import ErrorHandler from '../middlewares/error-handler';

export default async (req, res) => {
  try {
    const startDate = req.query.startDate || moment().format('YYYY-MM-DD');
    const amount = req.query.startDate && req.query.amount ? req.query.amount : 1;

    const wonDeals = await PipedriveService.getWonDeals({ startDate, amount });
    await BlingService.handleOrders(wonDeals, startDate);

    return res.status(httpStatus.OK).json();
  } catch (err) {
    return ErrorHandler(err, req, res);
  }
};
