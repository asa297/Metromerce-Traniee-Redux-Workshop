import { ICourseState } from './reducer'
import { MODULE_NAME } from './types'

export const getRootCourseState = (state) => state[MODULE_NAME] as ICourseState
