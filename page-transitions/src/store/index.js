import loggerMiddleware from 'redux-logger';
import { enableBatching } from 'redux-batched-actions';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';

export default createStore(
  enableBatching(rootReducer),
  applyMiddleware(
    loggerMiddleware,
  )
);
