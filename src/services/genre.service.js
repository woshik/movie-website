import Service from './service';

export default class Genre extends Service {
  constructor(category = 'movie') {
    const api = `genre/${category}`;
    super(api);
  }
}
