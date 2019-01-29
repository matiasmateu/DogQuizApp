import {combineReducers} from 'redux'
import breeds from './breeds'
import questions from './questions'
import gameStat from './gameStat'

export default combineReducers({
    breeds,
    questions,
    gameStat
})