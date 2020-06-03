import { combineReducers } from 'redux'

import auReducer from './au/reducer'
import { MODULE_NAME as AU_MODULE } from './au/types'

export const rootReducer = combineReducers({
    [AU_MODULE]: auReducer,
})