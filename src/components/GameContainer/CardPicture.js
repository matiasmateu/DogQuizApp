import React from 'react'
import './game.css'

export default (props) => {
  if (props.currentQuestion.type===2){
    return (
      <div className='card-picture'>
          <img className="main-image" src={props.currentQuestion.breed} alt=''/>
      </div>
    )
  }else{
    return (
    <div className='card-picture'>
        <h1 className="main-question">{props.currentQuestion.breed}</h1>
    </div>
    )
  } 
}