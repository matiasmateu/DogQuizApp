import axios from 'axios'
import shuffleArray from '../tools/ArrayShuffle'
export const CHECK_ANSWER = 'CHECK_ANSWER'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const UPDATE_BREEDS = 'UPDATE_BREEDS'

export const setQuestionList = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  }
}

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION
  }
}


/* @breed {String} is used to fetch data from API
 *  return Promise{Image of breed} 
 */
const fetchImage = (breed) => {
  return new Promise((resolve) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((result) => {
      const images = result.data.message
      resolve(images[Math.floor(Math.random() * (images.length))])
    })
  })
}

/* FUNCTION FETCH
 * return an unsorted array of breeds according to the current level
 * @level is used as limit of the returned array
 */
const fetchBreeds = async (level) => {
  return new Promise(resolve => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(async (result) => {
      const breeds = shuffleArray(Object.keys(result.data.message)).slice(0, level * 3)
      resolve(breeds)
    })
  })
}


/* sent an array of mixed questions to redux state
 * @level of the game to define how many breeds
 * @maxQuestion to define how many questions per breed
 */
export const genQuestionMix = (level, maxQuestions) => {
  return async (dispatch) => {

    fetchBreeds(level).then(async breeds => {
      let questionMix = [];

      for (let breed of breeds) {

        for (let index = 0; index < maxQuestions; index++) {

          const correctAnswer = breed
          const wrongAnswers = breeds.filter((breed) => breed !== correctAnswer)

          const questionOne = await genQuestionOne(correctAnswer, wrongAnswers)
          questionMix.push(questionOne)

          const questionTwo = await genQuestionTwo(correctAnswer, wrongAnswers)
          questionMix.push(questionTwo)
        }

      }


      questionMix = await shuffleArray([...questionMix].sort(() => Math.random() - 0.5));

      // Updating the redux state of questions
      dispatch(setQuestionList(questionMix))

    })


  }

}


const genQuestionOne = async (correctAnswer, wrongAnswers) => {
  const image = await fetchImage(correctAnswer)
  const shuffledWrongAnswers = await shuffleArray([...wrongAnswers])

  return {
    type: 1,
    question: image,
    option1: correctAnswer,
    option2: shuffledWrongAnswers[0],
    option3: shuffledWrongAnswers[1]
  }
}

const genQuestionTwo = async (correctAnswer, wrongAnswers) => {
  const correctImage = await fetchImage(correctAnswer)

  // Changing the order of the wrong breeds
  const shuffledWrongAnswers = await shuffleArray([...wrongAnswers])
  const wrongOne = await fetchImage(shuffledWrongAnswers[0])
  const wrongTwo = await fetchImage(shuffledWrongAnswers[1])

  return {
    type: 2,
    question: correctAnswer,
    option1: correctImage,
    option2: wrongOne,
    option3: wrongTwo
  }
}