import request from '../utils/request';
import ErrorHandler from '../utils/errorHandler';

export default class Service extends ErrorHandler {
  constructor(apiURL) {
    super();
    this.apiURL = apiURL;
  }

  get(params) {
    return this.asyncError(request({
      url: this.apiURL,
      method: 'get',
      params,
    }));
  }

  getById(id, params = {}) {
    return this.asyncError(request({
      url: `${this.apiURL}/${id}`,
      method: 'get',
      params,
    }));
  }

  getList(params = {}) {
    return this.asyncError(request({
      url: `${this.apiURL}/list`,
      method: 'get',
      params,
    }));
  }
}
