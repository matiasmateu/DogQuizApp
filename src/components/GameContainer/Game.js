import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import './game.css'
import OptionContainer from '../Options/Index'


export default (props) => {
  return (
    <section className="game">
        <HeaderContainer />

        <CardPicture dogPicture={props.question}/>
        <button onClick={props.handleNextQuestion}>Next Question</button>
        <OptionContainer />
    </section> 
  )
}