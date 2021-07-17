import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// setup thunk middleware
const middleware = [thunk];

// setup redux browser devTool
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);
