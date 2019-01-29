import React, {Component} from 'react'

class ScoreBoard extends Component{
    
    render(){
        console.log(this.props.stats.score)
        return (
        <div className="score-board">
            <ul className="score-container">
                <li class="logo"><h4>LOGO</h4></li>
                <li>Score:{this.props.stats.score}</li>
                
                <li>Level:{this.props.stats.level}</li>
                
                 <li>Win counter:{this.props.stats.counter}</li>
                
            </ul>
        </div>)
    }
}





export default ScoreBoard