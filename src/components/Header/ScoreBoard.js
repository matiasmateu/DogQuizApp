import React, {Component} from 'react'
import WinnerCount from './WinnerCount';

class ScoreBoard extends Component{
    
    render(){
        const totalTry = this.props.stats.winCounter + this.props.stats.loseCounter
        const percentage = Math.round(100/totalTry*this.props.stats.winCounter)
       
       
        return (
        <div className="score-board">
            <ul>
                <li>Score: {this.props.stats.score}</li>
                <li>Level: {this.props.stats.level}</li>
                <li><i className="fas fa-thumbs-up"></i> {percentage || 0} % </li>
                <li><WinnerCount total={this.props.stats.counter} /></li>
            </ul>
        </div>)
    }
}





export default ScoreBoard