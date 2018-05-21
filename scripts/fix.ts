import { writeFileSync, readFileSync } from 'fs';
import { nodeModules } from './../config/paths';

// fix redux-thunk typings issue
const reduxThunkTypesCode = 
`import { Middleware, Action, AnyAction } from "redux";

export interface ThunkDispatch<S, E, A extends Action> {
  <T extends A>(action: T): T;
  <R>(asyncAction: ThunkAction<R, S, E, A>): R;
}

export type ThunkAction<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export type ThunkMiddleware<S = {}, A extends Action = AnyAction, E = undefined> = Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>>;

declare const thunk: ThunkMiddleware & {
  withExtraArgument<E>(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>
}

export default thunk;`;
writeFileSync(nodeModules + '/redux-thunk/index.d.ts', reduxThunkTypesCode);

// fix redux-devtools-extension typings issue
const reduxDevtoolsExtensionTypesCode = 
  readFileSync(nodeModules + '/redux-devtools-extension/index.d.ts')
    .toString().replace(/GenericStoreEnhancer/g, 'StoreEnhancer');
writeFileSync(nodeModules + '/redux-devtools-extension/index.d.ts', reduxDevtoolsExtensionTypesCode);
