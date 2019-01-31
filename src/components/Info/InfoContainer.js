import React, { Component } from 'react';
import { connect } from 'react-redux'
import {showAlert} from '../../actions/message'
import InfoButton from './infoComponent';

class InfoContainer extends Component{
    render(){
        return(
            <InfoButton onClick={()=> this.props.showAlert("fas fa-info-circle","You can see a picture of a dog, try to guess the breed among the three choices.",null,null,true) }/> 
        )
    }
}

export default connect(null, {showAlert })(InfoContainer)

