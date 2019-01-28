import React, { Component } from 'react'
import OptionComponents from './OptionComponents'
import "./OptionContainer.css" 

class OptionContainer extends Component{
    render(){





        return (
            <div className="optionContainer">
                <OptionComponents />
                <OptionComponents />
                <OptionComponents />
            </div>
        )

        
    }
}

export default OptionContainer