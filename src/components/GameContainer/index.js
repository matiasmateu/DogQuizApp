import React, { Component } from 'react';
import axios from 'axios'
import Game from './Game';
import { connect } from 'react-redux'
import { levelUp } from '../../actions/gameStat'
import { getNewQuestions, nextQuestion } from '../../actions/questions'


class GameContainer extends Component{

    state = {
        maxQuestionPerBreed: 3
    }

    componentDidMount() {
        this.props.getNewQuestions(this.props.gameStat.level, 5)
    }

    onNextQuestion = () => {
        this.props.nextQuestion()
    }

    render(){ 
        return (<Game {...this.props.currentQuestion} handleNextQuestion={this.onNextQuestion}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentQuestion: state.questions.currentQuestion,
        gameStat: state.gameStat
    }
}

export default connect(mapStateToProps, { levelUp,  getNewQuestions, nextQuestion })(GameContainer)