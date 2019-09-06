import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import rootSaga from '@sagas'
import persistedReducer from '@stores'

let composeEnhancers = compose

// if (__DEV__) {
//   // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
//   composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
//     require('remote-redux-devtools').composeWithDevTools)({
//     name: Platform.OS,
//     ...require('../package.json').remotedev
//   })
// }

export default () => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(createLogger())
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(persistedReducer, composeEnhancers(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
