import React, { Component } from 'react';

import OptionContainer from './OptionContainer'

import HeaderContainer from './HeaderContainer';
import '../css/GameContainer.css';


class GameContainer extends Component{
    render(){ 
        return (
        <HeaderContainer />
        <OptionContainer />      
    )}
}

export default GameContainer