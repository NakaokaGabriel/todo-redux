import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import Navigation from './components/Navigation';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
