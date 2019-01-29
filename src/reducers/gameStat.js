import { LEVEL_UP } from '../actions/gameStat'

const initialState = {
  score: 0,
  level: 0,
  counter: 0
}

export default (state= initialState, action={}) => {
  switch(action.type) {
    case LEVEL_UP:
      return {...state, level: state.level + 1}
    default:
      return state
  }
}