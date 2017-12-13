import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../app/reducers/medicineReducer';
import promise from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(createLogger, thunk, promise())
  );
}
