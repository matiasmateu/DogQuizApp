import React, { Component } from 'react';
import { connect } from 'react-redux'
import {showAlert} from '../../actions/message'
import InfoButton from './infoComponent';

class InfoContainer extends Component{
    render(){
        return(
            <InfoButton onClick={()=> this.props.showAlert("fas fa-info-circle","This game has two options: one where you can see a picture of a dog and three breeds, the other where you see a breed name and three dog pictures. Try to guess! If it's the first time you see a dog you will receive an hint. You can use the mouse or use 'a', 'b', 'c' keys to select the options.","Close",null,true) }/> 
        )
    }
}

export default connect(null, {showAlert })(InfoContainer)

