import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer'

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(rootSaga)

  return { store }
}