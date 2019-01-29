import { CHECK_ANSWER, SET_QUESTIONS, NEXT_QUESTION } from '../actions/questions'

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
    case NEXT_QUESTION:
      console.log(state.questionList.slice(1), '<<=== NEXT QUESTION')
      return { questionList: state.questionList.slice(1), currentQuestion: {...state.questionList[0]}}
    default:
    return state
  }
}