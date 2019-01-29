import { CHECK_ANSWER, SET_QUESTIONS } from '../actions/questions'

const initialState = {
  questionList: [],
  currentQuestion: {
    question: "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
    correctAnswer: "Cockapoo"
  }
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case CHECK_ANSWER:
      return state
    case SET_QUESTIONS:
      return { ...state, questionList: [...action.payload] }
    case 'PICK_QUESTION':
      // Pop a new question from questionList
      // Change current question to the popped one
      return state
    default:
    return state
  }
}