import { all } from 'redux-saga/effects'

import auSagaModule from './au/sagas'

export function* rootSaga() {
    yield all([...auSagaModule])
}