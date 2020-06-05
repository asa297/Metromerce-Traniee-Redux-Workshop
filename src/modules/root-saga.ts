import { all } from 'redux-saga/effects'

import coursesSagaModule from './courses/sagas'

export function* rootSaga() {
  yield all([...coursesSagaModule])
}
