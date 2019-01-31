import React from 'react'
import './game.css'

export default (props) => {
  if (props.type===1){
    return (
      <div className='card-picture'>
          <img className="main-image" src={props.question} alt=''/>
      </div>
    )
  }else{
    return (
    <div className='card-picture'>
        <h1 className="main-question">{props.question}</h1>
    </div>
    )
  } 
}