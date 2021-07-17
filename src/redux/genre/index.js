import GenreService from '../../services/genre.service';

const genreService = new GenreService();

const GENRE_REQUEST_SENT = 'GENRE_REQUEST_SENT';
const GENRE_REQUEST_COMPLETE = 'GENRE_REQUEST_COMPLETE';
const GENRE_REQUEST_SUCCESS = 'GENRE_REQUEST_SUCCESS';
const GENRE_REQUEST_FAILURE = 'GENRE_REQUEST_FAILURE';
const CLEAR_ERROR = 'CLEAR_ERROR';

const initialState = {
  list: [],
  loader: false,
  success: false,
  error: null,
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GENRE_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };

    case GENRE_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };

    case GENRE_REQUEST_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload.list],
        success: true,
        error: null,
      };
    case GENRE_REQUEST_FAILURE:
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

const fetchGenreList = () => {
  function requestSent() {
    return {
      type: GENRE_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: GENRE_REQUEST_COMPLETE,
    };
  }

  function success(data) {
    return {
      type: GENRE_REQUEST_SUCCESS,
      payload: {
        list: data,
      },
    };
  }

  function failure(error) {
    return {
      type: GENRE_REQUEST_FAILURE,
      payload: { error },
    };
  }

  return async (dispatch) => {
    dispatch(requestSent());
    const [result, error] = await genreService.getList();
    dispatch(requestComplete());

    if (error) {
      dispatch(failure(error));
      return;
    }

    dispatch(success(result?.genres ?? []));
  };
};

export { fetchGenreList };

export default genreReducer;
