import axios from 'axios'
import arrayShuffle from '../tools/ArrayShuffle'

export const CHECK_ANSWER = 'CHECK_ANSWER'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const NEXT_QUESTION = 'NEXT_QUESTION'

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

export const getNewQuestions = (level, maxQuestionPerBreed) =>{

  return async (dispatch) => {

    const currentLevel = level + 1
    const totalBreed = currentLevel * 3

    await axios.get('https://dog.ceo/api/breeds/list/all').then( async (result) => {
        const breeds = arrayShuffle(Object.keys(result.data.message)).slice(0, totalBreed)

        let questions = [];

        for(let x = 0; x < breeds.length; x++) {
          const images = await fetchImage(breeds[x])

          for(let y = 0; y < maxQuestionPerBreed; y++) {
            questions.push({
              question: images[y],
              correctAnswer: breeds[x]
            })
          }

        }

        dispatch(setQuestionList(questions))
    })

  }
}

const fetchImage = (breed) => {
  return new Promise((resolve) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((result) => {
      resolve(result.data.message)
    })
  })
}

