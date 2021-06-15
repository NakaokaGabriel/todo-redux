import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

declare global {
  interface Console {
    tron: any;
  }
}

const tron = Reactotron
  .configure()
  .use(compose(reactotronRedux(), sagaPlugin({ except: [''] })))
  .connect();

tron.clear!();

console.tron = tron;

const sagaMiddleware = createSagaMiddleware();
const createEnhancer = tron.createEnhancer!();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), createEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
