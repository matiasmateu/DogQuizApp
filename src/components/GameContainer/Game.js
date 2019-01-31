import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import './game.css'
import OptionContainer from '../Options/Index'
import Modal from '../Modal';
import {questionOneExample} from '../../reducers/questions'
import {questionTwoExample} from '../../reducers/questions'

export default (props) => {
  const { currentQuestion } = props
  if(currentQuestion) {
    return (
      <section className="game">
          <HeaderContainer />
          <CardPicture type={currentQuestion.type} question={currentQuestion.question}/>
          <OptionContainer />
          <Modal/>
      </section> 
    )
  }

  return (<div>Loading</div>)
  
}

// You can see a picture of a dog, try to guess the breed among the three choices. 
// After three right guesses you will go to the next level.
//  