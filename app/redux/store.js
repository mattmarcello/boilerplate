import { createStore, applyMiddleware, compose } from 'redux';

//TODO: implement middleware for async actions
// import createMiddleware from './middleware/clientMiddleware';

export default function createApiClientStore(client, data) {
  // const middleware = createMiddleware(client);
  let finalCreateStore;
  if ( __DEVTOOLS__) {
      const { devTools, persistState } = require('redux-devtools');
     finalCreateStore = compose(
           // applyMiddleware(middleware),
           devTools(),
           persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
         )(createStore);
  }
  else {
    // finalCreateStore = applyMiddleware(middleware)(createStore);
    finalCreateStore = creteStore
  }
  const reducer = require('./modules/reducer');
  const store = finalCreateStore(reducer, data);
  store.client = client;


  //TODO: set up hotmodule replacement
  if (__DEVELOPMENT__ && module.hot) {
      module.hot.accept('./modules/reducer', () => {
            store.replaceReducer(require('./modules/reducer'));
          });
    }

  return store;
}
