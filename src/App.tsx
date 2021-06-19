import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import Navigation from './components/Navigation';
import Todo from './components/Todo';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Todo />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
