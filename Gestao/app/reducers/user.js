import { USER_INFO, USER_LOGIN } from '../actions/user';

export function user(state = [], action){
    switch(action.type){
    case USER_INFO: {
      return action.clients;
    }
    case USER_LOGIN: {
      console.log(action);
      return action.clients;
    }
    default: return state;
  }
}
