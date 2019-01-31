import shuffle from '../tools/ArrayShuffle'
import {
  CHECK_ANSWER,
  SET_QUESTIONS,
  NEXT_QUESTION
} from '../actions/questions'

// USED ONLY FOR CHECKS 
export const questionOneExample = {
  type:1,
  breed:"Akita",
  option1:"https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
  option2:"https://images.dog.ceo/breeds/appenzeller/n02107908_3791.jpg",
  option3:"https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg"
}
// USED ONLY FOR CHECKS 
export const questionTwoExample = {
  type:2,
  breed:"https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
  option1:"Akita",
  option2:"Dalmata",
  option3:"Bulldog"
}

const initialState = {
  questionList: [],
  currentQuestion: {
    question: "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
    correctAnswer: "Cockapoo"
  },
  questionMix:[{
      type:1,
      breed:"Akita",
      option1:"https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
      option2:"https://images.dog.ceo/breeds/appenzeller/n02107908_3791.jpg",
      option3:"https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg"
    },{
      type:2,
      breed:"https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpeg",
      option1:"Akita",
      option2:"Dalmata",
      option3:"Bulldog"
    }]
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