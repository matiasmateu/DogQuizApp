import axios from 'axios'

export const LEVEL_UP = 'LEVEL_UP'

export const levelUp = () => {
  return {
    type: LEVEL_UP
  }
}

export function getAlbums() {
  return function (dispatch) {
    // request('https://jsonplaceholder.typicode.com/albums')
    //   .then(response => {
    //     dispatch(setAlbums(response.body))
    //   })
  }
}

const getBreeds = (totalBreed) => {
  axios.get('https://dog.ceo/api/breeds/list/all').then( async (result) => {
    const breeds = Object.keys(result.data.message).slice(0, totalBreed)
    const questions = await this.getQuestionList(breeds)
    console.log(questions, '<=== QUESTIONS')
  })
}