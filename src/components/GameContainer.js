import React, { Component } from 'react';
import axios from 'axios'


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
        <header>
           asdasds
        </header>
        
    )}
}

export default GameContainer