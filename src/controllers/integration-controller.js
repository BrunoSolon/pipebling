import httpStatus from 'http-status';

import PipedriveService from '../services/pipedrive';
// import BlingService from '../services/bling';
import ErrorHandler from '../middlewares/error-handler';

export default async (req, res) => {
  try {
    const wonDeal = await PipedriveService.getWonDeal();
    // await BlingService.createOrder(wonDeal);

    return res.status(httpStatus.OK).json(wonDeal);
  } catch (err) {
    return ErrorHandler(err, req, res);
  }
};
