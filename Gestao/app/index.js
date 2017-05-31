import React from 'react';

// Reducers
import reducers from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';

import Loader from './components/Loader';
import { RootNagivation } from './config/router';

const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Gestao extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNagivation />
        {/* <Loader animating={false} /> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
