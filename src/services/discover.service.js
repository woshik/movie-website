import Service from './service';

export default class Discover extends Service {
  constructor(category = 'movie') {
    const api = `discover/${category}`;
    super(api);
  }
}
