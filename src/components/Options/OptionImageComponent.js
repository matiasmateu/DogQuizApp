import React, { Component} from 'react'

const hint = true;

class OptionImageComponent extends Component{
    render(){
        return(
            <div onClick={this.props.onClick} className=" optionComponents">  
                <img src={this.props.breed} alt="breed-option"></img>
            </div>
        )
    }
}


export default OptionImageComponent