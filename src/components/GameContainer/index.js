import React, { Component } from 'react';
import axios from 'axios'
import Game from './Game';


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
        <Game/>
    )}
}

export default GameContainer