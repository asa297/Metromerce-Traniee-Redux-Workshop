import { actionTypes } from './types'

export interface ITestState {
    number: number
}

const initialState: ITestState = {
    number: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NUBMER_SUCCESS:
            return {
                number: action.payload.newNumber,
            } as ITestState

        default:
            return state
    }
}
