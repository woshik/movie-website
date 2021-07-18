import Service from './service';
import request from '../utils/request';

export default class Movie extends Service {
  constructor() {
    const api = 'movie';
    super(api);
  }

  getCredits(id, params = {}) {
    return this.asyncError(
      request({
        url: `${this.apiURL}/${id}/credits`,
        method: 'get',
        params,
      }),
    );
  }
}
