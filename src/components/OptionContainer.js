import React, { Component } from 'react';
import OptionComponents from './OptionComponents'

class OptionContainer extends Component{
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