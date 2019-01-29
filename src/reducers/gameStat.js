import { LEVEL_UP, RESET_COUNTER, SCORE_UP, COUNTER_UP } from '../actions/gameStat'

const initialState = {
  score: 0,
  level: 0,
  counter: 0
}

export default (state= initialState, action={}) => {
  switch(action.type) {
    case LEVEL_UP:
      return {...state, level: state.level + 1}
    case RESET_COUNTER:
      return { ...state, counter: 0}
    case SCORE_UP:
      return {...state, score: state.score+1}
    case COUNTER_UP:
      return {...state, counter: state.counter +1}
      default:
      return state
  }
}

