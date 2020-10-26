import axios from 'axios';
import Constants from '../utils/constants';
import IntegrationError, { IntegrationCodeError } from '../utils/errors/integration';
import { handleAxiosError } from '../utils/general';

export default class PipedriveService {
  static async getWonDeals(opts) {
    let response = null;
    const url = `${Constants.pipedrive.url}/deals/timeline`;

    try {
      response = await axios.get(url, {
        params: {
          api_token: Constants.pipedrive.apikey,
          start_date: opts.startDate,
          interval: 'day',
          amount: opts.amount,
          field_key: 'won_time',
        },
      });

      if (response && response.data) {
        response = response.data.payload ? response.data.payload : response.data;
      }
    } catch (err) {
      throw new IntegrationError(handleAxiosError(err), IntegrationCodeError.ERROR_ON_GET_PIPEDRIVE_DEALS);
    }

    return response;
  }
}
