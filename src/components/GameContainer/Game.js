import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import OptionContainer from '../Options/Index'
import Modal from '../Modal';
import InfoContainer from '../Info/InfoContainer';
import Loader from '../Loader';
import './game.css'


// You can see a picture of a dog, try to guess the breed among the three choices. 
// After three right guesses you will go to the next level.
//  



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
        <InfoContainer />
        <Modal/>
      </div>
    )
  }

  return <Loader/>
}

