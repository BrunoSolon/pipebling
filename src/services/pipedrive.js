import axios from 'axios';
import Constants from '../utils/constants';
import IntegrationError, { IntegrationCodeError } from '../utils/errors/integration';
import { handleAxiosError } from '../utils/general';

export default class PipedriveService {
  static async getWonDeal() {
    let response = null;
    const uri = `${Constants.pipedrive.url}/deals`;

    try {
      response = await axios.get(uri, {
        params: {
          api_token: Constants.pipedrive.apikey,
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
