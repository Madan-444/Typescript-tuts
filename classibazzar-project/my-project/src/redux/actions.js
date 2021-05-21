import { ajax } from 'rxjs/ajax';
import {  mergeMap,map, delay } from 'rxjs/operators';

import {createStore,applyMiddleware} from 'redux'
import { ofType,createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware();


// action creators
export const fetchUser = username => ({ type: 'FETCH_USER', payload: username });
const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

// epic
const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
  mergeMap(action => 
    //   console.log("The nameis",action.payload),
      ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
      map(response => fetchUserFulfilled(response)
      )
      )

    )

);

const users = (state = {usersData : null}, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      console.log("The fetched user",action.payload)
    //   delay(1000);
      return {
        ...state,
        usersData: action.payload
      };

    default:
      return state;
  }
};

  const store = createStore(users,applyMiddleware(epicMiddleware))

  epicMiddleware.run(fetchUserEpic);

  export default store;
  console.log("The initial state",store.getState())

  // store.dispatch(fetchUser('Madan Rijal'))

  