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
/*
* @level current level of the game. The returned array is going to be as big as the level * 3
* @maxQuestionPerBreed - Limit the number of question retrieved from the API
* returns an action and updates the state with the new questions.
*/
export const getNewQuestions = (level, maxQuestionPerBreed) =>{  
  console.log(genQuestionMix(3, 10))
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
const updateBreeds = async (level) => {
    let breeds;
    await axios.get('https://dog.ceo/api/breeds/list/all').then( 
      async (result) => {
         breeds = arrayShuffle(Object.keys(result.data.message)).slice(0, level*3)})
    return arrayShuffle(breeds);
}



/* returns an Object of type QUESTION 1
*
*/
const genQuestion1 = async (breeds) =>{
  const image = await fetchImage(breeds[0])
    return {
      type:1,
      question:image,
      option1:breeds[0],
      option2:breeds[1],
      option3:breeds[2]
    }
}

/* returns an Object of type QUESTION 2
*
*/
const genQuestion2 = async (breeds) => {
  // const images = await fetchImage(breeds[0])
  const correctImage = await fetchImage(breeds[0])
  const wrongOne = await fetchImage(breeds[1])
  const wrongTwo = await fetchImage(breeds[2])
  return {
    type:2,
    question:breeds[0],
    option1: correctImage,
    option2: wrongOne,
    option3: wrongTwo
  }
}

/* returns an array of questions
* @level of the game to define how many breeds
* @maxQuestion to define how many questions per breed
*/
function genQuestionMix(level,maxQuestions){
  let questionMix = [];
  updateBreeds(level).then( async result =>  {
    for (let index = 0; index < maxQuestions; index++) {
      const questionOne = await genQuestion1(result)
      const questionTwo = await genQuestion2(result)
      questionMix.push(questionOne,questionTwo)
    }
  })
  return arrayShuffle(questionMix)
}