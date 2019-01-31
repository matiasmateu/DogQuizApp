import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import OptionContainer from '../Options/Index'
import Modal from '../Modal';


// You can see a picture of a dog, try to guess the breed among the three choices. 
// After three right guesses you will go to the next level.
//  

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

