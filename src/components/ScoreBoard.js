import React, {Component} from 'react'

class ScoreBoard extends Component{


    render(){
        return (
        <div className="score-board">
            <ul className="score-container">
                <li class="logo"><h4>LOGO</h4></li>
                <li>Score:</li>
                <li>12</li>
            </ul>
        </div>)
    }
}

export default ScoreBoard