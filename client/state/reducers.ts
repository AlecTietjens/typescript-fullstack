import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

export interface State {
  routing: RouterState;
}

export const state = combineReducers<State>({
  routing: routerReducer,
});
