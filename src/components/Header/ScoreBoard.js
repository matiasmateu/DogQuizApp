import React, {Component} from 'react'
import WinnerCount from './WinnerCount';

class ScoreBoard extends Component{
    
    render(){
        console.log(this.props.stats.score)
        return (
        <div className="score-board">
            <ul>
                <li>Score:{this.props.stats.score}</li>
                <li>Level:{this.props.stats.level}</li>
                <li>
                    <WinnerCount total={this.props.stats.counter}/>
                </li>
            </ul>
        </div>)
    }
}





export default ScoreBoard