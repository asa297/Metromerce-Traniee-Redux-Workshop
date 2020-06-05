import { put, takeLeading } from 'redux-saga/effects'
import axios from 'axios'

import { ActionType } from '../types'
import { actionTypes } from './types'
import { getCourses, getCoursesSuccess, getCoursesFailure } from './actions'

function* getCoursesTask(action?: ActionType<typeof getCourses>) {
  try {
    const data = yield axios.get('https://godev-apis.goscoreup.com/courses/recommend').then((res) => res.data)
    console.error('data', data)
    yield put(getCoursesSuccess())
  } catch (error) {
    yield put(getCoursesFailure(error))
  }
}

export default [takeLeading(actionTypes.GET_COURSES, getCoursesTask)]
