import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './appRedux/store';
import Home from './components/Home';

export default () => 
  <Provider store={store}>
    <Home />
  </Provider>