//import axios from 'axios'

export const LEVEL_UP = 'LEVEL_UP'

export const levelUp = () => {
  return {
    type: LEVEL_UP
  }
}

export const RESET_COUNTER = 'RESET_COUNTER'

export const resetCounter = () => {
  return {
    type: RESET_COUNTER
  }
}

export const SCORE_UP = 'SCORE_UP'

export const scoreUp = () => {
  return {
    type: SCORE_UP

  }
}

export const COUNTER_UP = 'COUNTER_UP'

export const counterUp = () => {
  return {
    type: COUNTER_UP

  }
}

export const LOSE_COUNTER_UP = 'LOSE_COUNTER_UP'

export const loseCounterUp = () => {
  return {
    type: LOSE_COUNTER_UP

  }
}

export const RESET_GAME = 'RESET_GAME'

export const resetGameStats = () => {
  return {
    type: RESET_GAME

  }
}


/*
const getBreeds = (totalBreed) => {
  axios.get('https://dog.ceo/api/breeds/list/all').then( async (result) => {
    const breeds = Object.keys(result.data.message).slice(0, totalBreed)
    const questions = await this.getQuestionList(breeds)
    console.log(questions, '<=== QUESTIONS')
  })
}
*/