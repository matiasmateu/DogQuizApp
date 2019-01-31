import {combineReducers} from 'redux'
import breeds from './breeds'
import questions from './questions'
import gameStat from './gameStat'
import message from './message'

export default combineReducers({
    questions,
    gameStat,
    message
})