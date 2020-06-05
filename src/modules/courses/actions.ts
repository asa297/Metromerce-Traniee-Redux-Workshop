import { actionTypes } from './types'

export const getCourses = () => ({
  type: actionTypes.GET_COURSES,
})
export const getCoursesSuccess = () => ({
  type: actionTypes.GET_COURSES_SUCCESS,
})
export const getCoursesFailure = (error) => ({
  type: actionTypes.GET_COURSES_FAILURE,
  error,
})
