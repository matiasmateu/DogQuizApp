import React, { Component } from 'react';
import OptionComponents from './OptionComponents'

class OptionContainer extends Component{
    render(){ 
        return (
        <div>
            <OptionComponents />
            <OptionComponents />
            <OptionComponents />
        </div>
        
        
    )}
}

export default OptionContainer;