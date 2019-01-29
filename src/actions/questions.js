import axios from 'axios'

export const CHECK_ANSWER = 'CHECK_ANSWER'
export const SET_QUESTIONS = 'SET_QUESTIONS'

export const checkAnswer = () => {
  // Will take a value as argument
  return {
    type: CHECK_ANSWER,
    payload: {}
  }
}

export const setQuestionList = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  }
}

export const getQuestionList = (breeds, maxQuestionPerBreed) =>{

  return async (dispatch) => {
    let questions = [];

    for(let x = 0; x < breeds.length; x++) {
      const images = await fetchImage(breeds[x])
      for(let y = 0; y < maxQuestionPerBreed; y++) {
        questions.push({
          question: images[y],
          answer: breeds[x]
        })
      }
    }

    dispatch(setQuestionList(questions))
  }
}

const fetchImage = (breed) => {
  return new Promise((resolve) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((result) => {
      resolve(result.data.message)
    })
  })
}