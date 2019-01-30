import shuffle from '../tools/ArrayShuffle'

import {
  CHECK_ANSWER,
  SET_QUESTIONS,
  NEXT_QUESTION,
  UPDATE_BREEDS
} from '../actions/questions'

const initialState = {
  breeds: [],
  questionList: [],
  currentQuestion: {
    question: "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
    correctAnswer: "Cockapoo"
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_ANSWER:
      return state
    case SET_QUESTIONS:
      return {
        ...state,
        questionList: shuffle(action.payload.slice(1)),
        currentQuestion: { ...action.payload[0]
        }
      }
    case NEXT_QUESTION:
      return {
        ...state,
        questionList: state.questionList.slice(1),
        currentQuestion: { ...state.questionList[0]
        }
      }
    case UPDATE_BREEDS: 
      return {...state, breeds: [...action.payload]}
    default:
      return state
  }
}