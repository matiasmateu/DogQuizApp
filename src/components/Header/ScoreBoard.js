import React, {Component} from 'react'
import WinnerCount from './WinnerCount';

class ScoreBoard extends Component{
    
    render(){
        const totalTry = this.props.stats.winCounter + this.props.stats.loseCounter
        const percentage = 100/totalTry*this.props.stats.winCounter
        console.log(percentage)
       
        return (
        <div className="score-board">
            <ul>
                <li>Score: {this.props.stats.score}</li>
                <li>Level: {this.props.stats.level}</li>
                <li><i class="fas fa-thumbs-up"></i> 00%</li>
                <li>
                    <WinnerCount total={this.props.stats.counter}  percentage={percentage}/> 
                   
                </li>
                
            </ul>
        </div>)
    }
}





export default ScoreBoard