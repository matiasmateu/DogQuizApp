import axios from 'axios'
import shuffleArray from '../tools/ArrayShuffle'
export const CHECK_ANSWER = 'CHECK_ANSWER'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const UPDATE_BREEDS = 'UPDATE_BREEDS'
export const EMPTY_LIST = 'EMPTY_LIST'
export const REMOVE_BREED = 'REMOVE_BREED'
export const ADD_BREED = 'ADD_BREED'

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

export const updateBreeds = (breeds) => {
  return {
    type: UPDATE_BREEDS,
    payload:breeds
  }
}

export const addBreedToHistory = (breed) => {
  return {
    type: ADD_BREED,
    payload:breed
  }
}

export const emptyQuestionList = () => {
  return {
    type: EMPTY_LIST
  }
}


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

      // Updating the redux state of questions-breeds
      dispatch(updateBreeds(breeds))

      let questionMix = [];

      // Fetching a total of questions: maxQuestion
      for(let tot = 0; tot < maxQuestions; tot++) {
        const correctAnswer = shuffleArray(breeds)[0]
        const wrongAnswers = breeds.filter((breed) => breed !== correctAnswer)

        // Splitting the question into two different type
        if(tot % 2 === 0) {
          questionMix.push(await genQuestionTypeOne(correctAnswer, wrongAnswers))
        } else {
          questionMix.push(await genQuestionTypeTwo(correctAnswer))
        }
      }

      questionMix = await shuffleArray([...questionMix]).sort(() => Math.random() - 0.5);

      // Updating the redux state of questions
      dispatch(setQuestionList(questionMix))

    })


  }

}


const genQuestionTypeOne = async (correctAnswer, wrongAnswers) => {
  const image = await fetchImage(correctAnswer)
  const shuffledOptions = shuffleArray([correctAnswer, wrongAnswers[0], wrongAnswers[1]])
  return {
    type: 1,
    question: image,
    correctAnswer: correctAnswer,
    options: shuffledOptions
  }
}



const genQuestionTypeTwo = async (correctAnswer) => {
  return new Promise((resolve) => {
    Promise.all([fetchImage(correctAnswer), fetchRandomImage()]).then(([correctImage, randomImage]) => {
      const filterRandom = randomImage.filter((image) => !image.includes(correctAnswer))
      const shuffledOptions = shuffleArray([correctImage, filterRandom[0], filterRandom[1]])
      resolve({
        type: 2,
        question: correctAnswer,
        correctAnswer: correctImage,
        options: shuffledOptions
      })
    })
  })
  
}

const fetchRandomImage = async () => {
  return new Promise((resolve) => {
    axios.get('https://dog.ceo/api/breeds/image/random/3').then((images) => {
      resolve(images.data.message)
    })
  })
}
