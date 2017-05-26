import { LIST_CLIENT } from '../actions/client';

export function client(state = [], action){
    switch(action.type){
    case LIST_CLIENT: {
      return action.clients;
    }
    default: return state;
  }
}
