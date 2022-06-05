import * as TYPE from '../action-types.js'

export default function vote(state = {n: 0, m: 0}, action) {
    switch (action.type) {
        case TYPE.VOTE_SUPPORT: 
            state = {...state, n: state.n + 1}
            break
        case TYPE.VOTE_AGAINST:
            state = {...state, m: state.m + 1}
            break
        case TYPE.VOTE_INIT: 
            let {title, n, m} = action
            state = {...state, title, n, m}
            break
        default:
            
    }
    return state
}