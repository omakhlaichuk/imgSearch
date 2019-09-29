import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

//const store=createStore(reducers,applyMiddleware(thunk), composeWithDevTools());
const store = createStore(
    reducers,
    
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >, document.getElementById('root'));