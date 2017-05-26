import React from 'react';

// Reducers
import reducers from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import WrapperLogin from './containers/WrapperLogin';
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Gestao extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <WrapperLogin />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
