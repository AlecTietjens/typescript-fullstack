import * as React from 'react';
import { applyMiddleware, createStore } from 'redux';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import * as thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';

import { state } from './state/reducers';

import { Hello } from './components/Hello';

const history = createBrowserHistory();

const middleware = applyMiddleware(createLogger(), routerMiddleware(history));
export const store = createStore(state, composeWithDevTools(middleware));

export const router =
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="*" component={Hello} />
    </Switch>
  </ConnectedRouter>;

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root'),
);
