import * as types from '../types';

export default (state="", {type, text}) => {
    switch(type) {
        case types.RECEIVE_HOME_SUCCESS:
            return text
        default:
        return state
    }
}