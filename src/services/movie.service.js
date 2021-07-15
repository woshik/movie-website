import Service from './service';

export default class Movie extends Service {
  constructor() {
    const api = 'movie';
    super(api);
  }
}
