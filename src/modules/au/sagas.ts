import { put, takeLeading } from 'redux-saga/effects'
import axios from 'axios'

import { ActionType } from '../types'
import { actionTypes } from './types'
import { addNumber, addNumberSuccess, addNumberFailure } from './actions'

function* addNumberTask(action?: ActionType<typeof addNumber>) {
    const { value } = action?.payload
    try {
        const newNumber = value * 10
        const au = yield axios.get('https://godev-apis.goscoreup.com/courses/recommend')
        console.error('au', au)
        yield put(addNumberSuccess(newNumber))
    } catch (error) {
        yield put(addNumberFailure(error))
    }
}

export default [takeLeading(actionTypes.ADD_NUBMER, addNumberTask)]
