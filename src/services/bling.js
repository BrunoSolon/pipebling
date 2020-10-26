import axios from 'axios';
import qs from 'qs';
import * as js2xmlparser from 'js2xmlparser';
import Constants from '../utils/constants';
import IntegrationError, { IntegrationCodeError } from '../utils/errors/integration';
import { handleAxiosError } from '../utils/general';
import { makeBlingPayload, dealSchema } from '../utils/format';
import * as DealRepository from '../db/repository/deal';

export default class BlingService {
  static async createOrder(order) {
    let response = null;
    const url = `${Constants.bling.url}/pedido/json`;

    const payload = makeBlingPayload(order);
    const xml = js2xmlparser.parse('pedido', payload);

    let data = {
      apikey: Constants.bling.apikey,
      xml,
    };
    data = qs.stringify(data);

    try {
      response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response && response.data) {
        response = response.data.payload ? response.data.payload : response.data;
      }
    } catch (err) {
      throw new IntegrationError(handleAxiosError(err), IntegrationCodeError.ERROR_ON_CREATE_BLING_ORDER);
    }

    return response;
  }

  static async handleOrders(orders, date) {
    if (!orders || !orders.data || !orders.data.length) {
      return null;
    }

    await Promise.all(orders.data.map(async (day) => {
      const arrayDeals = [];

      if (!day.deals || !day.deals.length) {
        return null;
      }

      let findDay = await DealRepository.findOne({ date }, { lean: true });
      if (!findDay) {
        findDay = await DealRepository.create({ date });
      }

      await Promise.all(day.deals.map((deal) => {
        const findDeal = findDay && findDay.deals.find((d) => d.pipedriveId === deal.id);

        if (!findDeal) {
          arrayDeals.push(dealSchema(deal));
          return this.createOrder(deal);
        }

        return null;
      }));

      if (arrayDeals && arrayDeals.length) {
        // eslint-disable-next-line no-underscore-dangle
        await DealRepository.updateOne({ _id: findDay._id }, {
          deals: arrayDeals,
          total_value: Object.values(day.totals.values)[0],
        });
      }

      return null;
    }));

    return null;
  }
}
