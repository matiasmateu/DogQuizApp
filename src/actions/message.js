export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'


export const showAlert  = (icon,message,buttonText,action,display, timer = false) => {

  return {
    type: SHOW_MESSAGE,
    payload: {
      icon,
      message,
      buttonText,
      action,
      display,
      timer,
      loader
  }
  }
}

export const hideAlert  = () => {
  return {
    type: HIDE_MESSAGE,
    payload: {}
  }
}