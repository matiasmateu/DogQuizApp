export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const HIDE_MESSAGE = 'HIDE_MESSAGE'


export const showAlert  = (icon,message,buttonText,action,display, loader, image= null) => {

  return {
    type: SHOW_MESSAGE,
    payload: {
      icon,
      message,
      buttonText,
      action,
      display,
      loader,
      image
  }
  }
}

export const hideAlert  = () => {
  return {
    type: HIDE_MESSAGE,
    payload: {}
  }
}