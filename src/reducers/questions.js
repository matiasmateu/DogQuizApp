import shuffle from '../tools/ArrayShuffle'

import {
  CHECK_ANSWER,
  SET_QUESTIONS,
  NEXT_QUESTION
} from '../actions/questions'

const initialState = {
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
        questionList: shuffle(action.payload.slice(1)),
        currentQuestion: { ...action.payload[0]
        }
      }
      //      return { ...state, questionList: [...action.payload] }
    case NEXT_QUESTION:
      return {
        questionList: state.questionList.slice(1),
        currentQuestion: { ...state.questionList[0]
        }
      }
    default:
      return state
  }
}