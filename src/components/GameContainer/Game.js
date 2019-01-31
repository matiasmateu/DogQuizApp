import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import OptionContainer from '../Options/Index'
import Modal from '../Modal';
import './game.css'
import Loader from '../Loader';

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