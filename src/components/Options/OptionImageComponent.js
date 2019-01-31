import React, { Component} from 'react'

import './OptionContainer.css'

class OptionImageComponent extends Component{
    render(){
        return(
            <div onClick={this.props.onClick} className="optionImageComponent__image">  
                <img src={this.props.breed} alt="breed-option"></img>
            </div>
        )
    }
}


export default OptionImageComponent