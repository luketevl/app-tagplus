import { combineReducers } from 'redux';
import { client } from './client';
import { user } from './user';

const reducers = combineReducers({
  client,
  user
});

export default reducers;
