import React, {Component} from 'react'
import ScoreBoard from './ScoreBoard'
import './HeaderContainer.css'
import { connect } from 'react-redux'

class HeaderContainer extends Component{
    render(){
        
        return (
            
        <header className="header">
            <div className="logo">
                <img src='./logo-white.png' alt='logo' />
                <p>PawQuiz</p>
            </div>
            <div className='score-container'>
                <ScoreBoard stats={this.props.stats} />
            </div>
             
        </header>
    )}
}


const mapStateToProps = (state) => {
      return {
      stats: state.gameStat
    }
  }
  
export default connect(mapStateToProps)(HeaderContainer)