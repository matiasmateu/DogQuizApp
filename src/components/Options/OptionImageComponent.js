import React, { Component} from 'react'

import './OptionContainer.css'

class OptionImageComponent extends Component{
    render(){
        let style = ""

        if((this.props.correct===this.props.breed) && (this.props.hint)){
            style = "optionImageComponent__image image__hint"
        }else{
            style = "optionImageComponent__image"
        }
        
        return(
                <div onClick={this.props.onClick} className={style}> 
                    <img src={this.props.breed} alt="breed-option"></img>
                    <span className="index-images">{this.props.index+1}</span>
                </div>
        )
    }
}


export default OptionImageComponent