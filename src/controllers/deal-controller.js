import httpStatus from 'http-status';
import ErrorHandler from '../middlewares/error-handler';
import DealService from '../services/deal';

export default async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const skip = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
    const { response, count } = await DealService.getDbDeals({ limit, skip });

    return res.status(httpStatus.OK).json({ response, count, pages: Math.ceil(count / limit) });
  } catch (err) {
    return ErrorHandler(err, req, res);
  }
};
