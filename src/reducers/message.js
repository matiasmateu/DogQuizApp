import { SHOW_MESSAGE,HIDE_MESSAGE } from "../actions/message";

const initialState = {
    icon:"fas fa-times",
    message:"That's not the correct answer!",
    buttonText:"Next Question",
    buttonAction:"NextQuestion",
    display:false

}

export default (state = initialState, action = {}) => {
    switch(action.type) {
      case SHOW_MESSAGE:
        return action.payload
      case HIDE_MESSAGE:
        return {...state,display:false}
      default:
      return state
    }
  }

