import DealModel from '../models/deal';

export async function count(query) {
  // eslint-disable-next-line no-useless-catch
  try {
    return DealModel.countDocuments(query);
  } catch (err) {
    throw err;
  }
}

export async function find(query, opts = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    return DealModel.find(query).limit(Number(opts.limit)).skip(Number(opts.skip));
  } catch (err) {
    throw err;
  }
}

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
