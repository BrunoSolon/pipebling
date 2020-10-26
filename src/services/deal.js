import * as DealRepository from '../db/repository/deal';
import PersistenceError from '../utils/errors/persistence';

export default class DealService {
  static async getDbDeals(opts) {
    let find = null;
    let count = null;

    try {
      const promises = [
        DealRepository.find({}, opts),
        DealRepository.count({}),
      ];

      [find, count] = await Promise.all(promises);
    } catch (err) {
      throw new PersistenceError(err);
    }

    return { response: find, count };
  }
}
