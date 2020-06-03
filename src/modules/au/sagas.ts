import { put, takeLeading } from 'redux-saga/effects'

import { ActionType } from '../types'
import { actionTypes } from './types'
import { addNumber, addNumberSuccess, addNumberFailure } from './actions'

function* addNumberTask(action?: ActionType<typeof addNumber>) {
    const { value } = action?.payload
    try {
        const newNumber = value * 10
        yield put(addNumberSuccess(newNumber))
    } catch (error) {
        yield put(addNumberFailure(error))
    }
}

export default [takeLeading(actionTypes.ADD_NUBMER, addNumberTask)]
