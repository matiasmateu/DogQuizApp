import shuffle from '../tools/ArrayShuffle'
import {
  CHECK_ANSWER,
  SET_QUESTIONS,
  NEXT_QUESTION,
  EMPTY_LIST,
  UPDATE_BREEDS,
  ADD_BREED
} from '../actions/questions'

const initialState = {
  questionList: [],
  currentQuestion: null,
  breeds:[]
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_ANSWER:
      return state
    case SET_QUESTIONS:
      return {
        ...state,
        questionList: shuffle(action.payload.slice(1)),
        currentQuestion: { ...action.payload[0] }
      }
    case NEXT_QUESTION:
      return {
        ...state,
        questionList: state.questionList.slice(1),
        currentQuestion: { ...state.questionList[0] }
      }
    case EMPTY_LIST:
      return {
        ...state,
        questionList: [],
        currentQuestion: null
      }
    case UPDATE_BREEDS:
      return {
        ...state,
        breeds : action.payload
      }
      case ADD_BREED:
      return {
        ...state,
        breeds :  [...state.breeds.push(action.payload)]
      }
    default:
      return state
  }
}