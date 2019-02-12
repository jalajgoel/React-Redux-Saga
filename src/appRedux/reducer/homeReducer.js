import * as types from '../types';

let initialState = {
    loading: false,
    success: false,
    error: false,
    data: null
}

export default (state=initialState, {type, data}) => {
    switch(type) {
        case types.RECEIVE_API_SUCCESS:
            return {
                ...initialState,
                success: true,
                data
            }
        case types.RECEIVE_API_ERROR:
            return {
                ...initialState,
                error: true,
                data
            }
        case types.RECEIVE_API_LOADING:
            return {
                ...initialState,
                loading: true
            }
        default:
        return state
    }
}