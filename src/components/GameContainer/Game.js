import React from 'react'
import CardPicture from './CardPicture'
import HeaderContainer from '../Header/Index'
import './game.css'
import OptionContainer from '../Options/Index'


export default (props) => {
  return (
    <section className="game">
        <HeaderContainer />
        <CardPicture dogPicture='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F08%2F16%2Fc2%2F53%2Fbonita-springs-dog-park.jpg&f=1'/>
        <OptionContainer />
    </section> 
  )
}