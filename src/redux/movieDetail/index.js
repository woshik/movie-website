import MovieService from '../../services/movie.service';

const movieService = new MovieService();

const MOVIE_DETAIL_REQUEST_SENT = 'MOVIE_DETAIL_REQUEST_SENT';
const MOVIE_DETAIL_REQUEST_COMPLETE = 'MOVIE_DETAIL_REQUEST_COMPLETE';
const MOVIE_DETAIL_REQUEST_SUCCESS = 'MOVIE_DETAIL_REQUEST_SUCCESS';
const MOVIE_DETAIL_REQUEST_FAILURE = 'MOVIE_DETAIL_REQUEST_FAILURE';
const CLEAR_ERROR = 'CLEAR_ERROR';

const initialState = {
  detail: {},
  loader: false,
  success: false,
  error: null,
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_DETAIL_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };

    case MOVIE_DETAIL_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };

    case MOVIE_DETAIL_REQUEST_SUCCESS: {
      return {
        ...state,
        detail: payload,
        success: true,
        error: null,
      };
    }
    case MOVIE_DETAIL_REQUEST_FAILURE:
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

const fetchMovieData = (movieId) => {
  function requestSent() {
    return {
      type: MOVIE_DETAIL_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: MOVIE_DETAIL_REQUEST_COMPLETE,
    };
  }

  function success(data) {
    return {
      type: MOVIE_DETAIL_REQUEST_SUCCESS,
      payload: data,
    };
  }

  function failure(error) {
    return {
      type: MOVIE_DETAIL_REQUEST_FAILURE,
      payload: error,
    };
  }

  return async (dispatch) => {
    dispatch(requestSent());
    const [movieData, movieError] = await movieService.getById(movieId);

    if (movieError) {
      dispatch(requestComplete());
      dispatch(failure(error));
      return;
    }

    const [creditData] = await movieService.getCredits(movieId);

    movieData.cast = creditData?.cast || [];
    movieData.crew = creditData?.crew || [];

    dispatch(requestComplete());

    dispatch(success(movieData));
  };
};

export { fetchMovieData };

export default movieDetailReducer;
