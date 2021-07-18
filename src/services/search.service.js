import Service from './service';

export default class Search extends Service {
  constructor(category = 'movie') {
    const api = `search/${category}`;
    super(api);
  }
}
