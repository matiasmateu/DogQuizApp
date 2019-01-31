import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import OptionContainer from '../Options/Index'
import Modal from '../Modal';
import InfoContainer from '../Info/InfoContainer';


export default (props) => {
  const { currentQuestion } = props
  if(currentQuestion) {
    return (
      <section className="game">
          <HeaderContainer />
          <CardPicture type={currentQuestion.type} question={currentQuestion.question}/>
          <OptionContainer />
          <InfoContainer />
          <Modal/>
      </section> 
    )
  }

  return (<div>Loading</div>)
  
}


// You can see a picture of a dog, try to guess the breed among the three choices. 
// After three right guesses you will go to the next level.
//  
=======
import Loader from '../Loader';
import './game.css'

export default (props) => {
  const { currentQuestion } = props

  return (
    <section className="game">
        <HeaderContainer/>
        <RenderQuestion currentQuestion={currentQuestion}/>
    </section> 
  )
}

const RenderQuestion = (props) => {
  if(props.currentQuestion) {
    return (
      <div>
        <CardPicture type={props.currentQuestion.type} question={props.currentQuestion.question}/>
        <OptionContainer />
        <Modal/>
      </div>
    )
  }

  return <Loader/>
}

