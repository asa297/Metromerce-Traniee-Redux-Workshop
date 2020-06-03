import { actionTypes } from './types'

export const addNumber = (value: number) => ({
    type: actionTypes.ADD_NUBMER,
    payload: {
        value,
    },
})
export const addNumberSuccess = (newNumber: number) => ({
    type: actionTypes.ADD_NUBMER_SUCCESS,
    payload: {
        newNumber,
    },
})
export const addNumberFailure = error => ({
    type: actionTypes.ADD_NUBMER_FAILURE,
    error,
})
