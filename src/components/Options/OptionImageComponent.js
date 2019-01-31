import React, { Component} from 'react'


class OptionImageComponent extends Component{

    onClick = () => {
        this.props.onclick(this.props.breed)
    }
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