import React, {Component} from 'react'
import ScoreBoard from './ScoreBoard'
import './HeaderContainer.css'
import { connect } from 'react-redux'

class HeaderContainer extends Component{
    render(){
        
        return (
            
        <div className="container">
             <ScoreBoard stats={this.props.stats} />
        </div>
    )}
}


const mapStateToProps = (state) => {
      return {
      stats: state.gameStat
    }
  }
  
export default connect(mapStateToProps)(HeaderContainer)