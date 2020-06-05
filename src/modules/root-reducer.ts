import { combineReducers } from 'redux'

import coursesReducer from './courses/reducer'
import { MODULE_NAME as COURSES_MODULE } from './courses/types'

export const rootReducer = combineReducers({
  [COURSES_MODULE]: coursesReducer,
})
