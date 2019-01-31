import React, { Component } from 'react';
import Game from './Game';
import { connect } from 'react-redux'
import { levelUp } from '../../actions/gameStat'
import { nextQuestion, genQuestionMix } from '../../actions/questions'


class GameContainer extends Component{
  componentDidMount() {
      this.props.genQuestionMix(this.props.gameStat.level, 25)
  }

  render(){ 
      return (<Game currentQuestion ={this.props.currentQuestion}/>)
  }
}

const mapStateToProps = (state) => {
    return {
      currentQuestion: state.questions.currentQuestion,
      gameStat: state.gameStat
    }
}

export default connect(mapStateToProps, { levelUp,  genQuestionMix, nextQuestion })(GameContainer)