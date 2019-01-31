import React, { Component } from 'react';
import Game from './Game';
import { connect } from 'react-redux'
import { levelUp } from '../../actions/gameStat'
import { nextQuestion, genQuestionMix } from '../../actions/questions'


class GameContainer extends Component{

    state = {
        maxQuestionPerBreed: 3
    }

    componentDidMount() {
        this.props.genQuestionMix(this.props.gameStat.level, 5)
    }

    onNextQuestion = () => {
        this.props.nextQuestion()
    }

    render(){ 
        return (<Game currentQuestion = {this.props.currentQuestion} handleNextQuestion={this.onNextQuestion}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentQuestion: state.questions.currentQuestion,
        gameStat: state.gameStat
    }
}

export default connect(mapStateToProps, { levelUp,  genQuestionMix, nextQuestion })(GameContainer)