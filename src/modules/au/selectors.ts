import { ITestState } from './reducer'
import { MODULE_NAME } from './types'

export const getRootTestState = state => state[MODULE_NAME] as ITestState

export const getNumberState = state => state.number
