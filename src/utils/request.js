import axios from 'axios';

let source;

const request = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  timeout: 60000,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

// Request interceptors
request.interceptors.request.use(
  (config) => {
    source = axios.CancelToken.source();
    return { ...config, cancelToken: source.token };
  },
  (error) => Promise.reject(error),
);

// Response interceptors
request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export function cancelRequest(message = '') {
  source.cancel(message);
}

export default request;
