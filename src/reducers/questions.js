import { CHECK_ANSWER } from '../actions/questions'

const initialState = {
  questionList: [
    {
      question: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
      correctAnswer: "Akita"
    },
    {
      question: "https://images.dog.ceo/breeds/beagle/n02088364_1507.jpg",
      correctAnswer: "Beagle"
    },
    {
      question: "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
      correctAnswer: "Cockapoo"
    }
  ],
  currentQuestion: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case CHECK_ANSWER:
      return state
    case 'PICK_QUESTION':
      // Pop a new question from questionList
      // Change current question to the popped one
      return state
    default:
    return state
  }
}