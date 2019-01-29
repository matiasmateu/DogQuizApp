import React, { Component } from 'react';
import OptionComponents from './OptionComponents'

class OptionContainer extends Component{

    checkAnswer = () => {
        // True => update score
        // False => 
        // Get next question
    }

    render(){ 
        return (
        <div className="optionsContainer">
            <OptionComponents />
            <OptionComponents />
            <OptionComponents />
        </div>
        
        
    )}
}

export default OptionContainer;