import DealModel from '../models/deal';

export async function findOne(query, opts = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    return DealModel.findOne(query, '', opts);
  } catch (err) {
    throw err;
  }
}

export async function create(payload) {
  // eslint-disable-next-line no-useless-catch
  try {
    return DealModel.create(payload);
  } catch (err) {
    throw err;
  }
}

export async function updateOne(query, payload) {
  // eslint-disable-next-line no-useless-catch
  try {
    return DealModel.updateOne(query, payload);
  } catch (err) {
    throw err;
  }
}
