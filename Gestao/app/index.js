import React from 'react';

// Reducers
import reducers from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';

import LoginContainer from './containers/LoginContainer';
import Loader from './components/Loader';

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
        <LoginContainer />
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
