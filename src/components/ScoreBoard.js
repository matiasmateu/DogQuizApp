import React, {Component} from 'react'

class ScoreBoard extends Component{


    render(){
        return (
        <div className="score-board">
            <ul className="score-container">
                <li><h4>LOGO</h4></li>
                <li><div className="score-info">
                    <h4>Score:</h4>
                    <span>3</span>
                </div></li>
            </ul>
        </div>)
    }
}

export default ScoreBoard