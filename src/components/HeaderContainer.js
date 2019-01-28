import React, {Component} from 'react'
import ScoreBoard from './ScoreBoard'
import '../css/HeaderContainer.css'

class HeaderContainer extends Component{


    render(){
        return (
        <div className="container">
        
             <ScoreBoard />
             
        </div>
        
       
    )}
}

export default HeaderContainer