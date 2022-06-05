import vote from './vote.js'
import personal from './personal.js'
import {combineReducers} from 'redux'

// combine all reducers
let reducer = combineReducers({
    vote, 
    personal
})

export default reducer