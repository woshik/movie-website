// import MovieService from '../../services/movie.service';
import DiscoverService from '../../services/discover.service';

// const movieService = new MovieService();
const discoverService = new DiscoverService();

const MOVIE_REQUEST_SENT = 'MOVIE_REQUEST_SENT';
const MOVIE_REQUEST_COMPLETE = 'MOVIE_REQUEST_COMPLETE';
const MOVIE_REQUEST_SUCCESS = 'MOVIE_REQUEST_SUCCESS';
const MOVIE_REQUEST_FAILURE = 'MOVIE_REQUEST_FAILURE';
const CLEAR_ERROR = 'CLEAR_ERROR';

const initialState = {
  list: {},
  loader: false,
  success: false,
  error: null,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };

    case MOVIE_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };

    case MOVIE_REQUEST_SUCCESS: {
      const movies = {};

      payload?.list?.forEach((movie) => {
        movies[movie.id] = movie;
      });

      return {
        ...state,
        list: { ...state.list, ...movies },
        success: true,
        error: null,
      };
    }
    case MOVIE_REQUEST_FAILURE:
      return {
        ...state,
        success: false,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

const fetchMovieList = (params, callback) => {
  function requestSent() {
    return {
      type: MOVIE_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: MOVIE_REQUEST_COMPLETE,
    };
  }

  function success(data) {
    return {
      type: MOVIE_REQUEST_SUCCESS,
      payload: {
        list: data,
      },
    };
  }

  function failure(error) {
    return {
      type: MOVIE_REQUEST_FAILURE,
      payload: { error },
    };
  }

  return async (dispatch) => {
    dispatch(requestSent());
    const [data, error] = await discoverService.get(params);
    dispatch(requestComplete());

    if (error) {
      dispatch(failure(error));
      return;
    }

    const result = data?.results ?? [];

    dispatch(success(result));

    // return data to the component component
    callback(result);
  };
};

export { fetchMovieList };

export default movieReducer;
