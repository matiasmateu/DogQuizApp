import React, { Component} from 'react'


class OptionImageComponent extends Component{
    render(){
        console.log(this.props)
        return(
            <div onClick={this.props.onclick} className=" optionComponents">  
                <img src={this.props.breed} alt="breed-option"></img>
            </div>
        )
    }
}


export default OptionImageComponent