import React, { Component } from 'react';
import axios from 'axios'
import CardPicture from './CardPicture';


class GameContainer extends Component{

    state = {
        breeds: null
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/list/all').then((result) => {
            this.setState(Object.keys(result.data.message))
        })
    }

    render(){ 
        return (
        <section className="game">
            <CardPicture dogPicture='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F08%2F16%2Fc2%2F53%2Fbonita-springs-dog-park.jpg&f=1'/>
        </section> 
    )}
}

export default GameContainer