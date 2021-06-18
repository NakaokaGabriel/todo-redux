import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { TodoList } from './modules/todo/types';

declare global {
  interface Console {
    tron: any;
  }
}

export interface IState {
  todo: TodoList
}

const tron = Reactotron
  .configure()
  .use(compose(reactotronRedux(), sagaPlugin({ except: [''] })))
  .connect();

const sagaMiddleware = createSagaMiddleware();
const createEnhancer = tron.createEnhancer!();

const middlewares = [sagaMiddleware];

const enhancer = 
  process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares), createEnhancer)
  : applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);


sagaMiddleware.run(rootSaga);

export default store;
