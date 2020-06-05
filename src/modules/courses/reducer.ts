import { actionTypes } from './types'

export interface ICourseState {}

const initialState: ICourseState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
