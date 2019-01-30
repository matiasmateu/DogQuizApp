import React, { Component } from 'react';
import OptionComponents from './OptionComponents'
import { connect } from 'react-redux'
import { resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, resetGameStats } from '../../actions/gameStat'
import { getNewQuestions,nextQuestion } from '../../actions/questions'
import {showAlert} from '../../actions/message'
import shuffle from '../../tools/ArrayShuffle'


class OptionContainer extends Component{
    /**
    * Returns an array of 3 options with random order. It includes the correct Answer
    */
    generateOptions(){
        let answers = [this.props.currentAnswer]
        let incorrect1
        let incorrect2
        do{
            let randomIndex1 = Math.floor(Math.random() * (this.props.breeds.length))
            incorrect1 = this.props.breeds[randomIndex1]
            let randomIndex2 = Math.floor(Math.random() * (this.props.breeds.length))
            incorrect2 = this.props.breeds[randomIndex2]
        }while((incorrect1.toUpperCase()===incorrect2.toUpperCase())||(incorrect1.toUpperCase()===this.props.currentAnswer.toUpperCase())||(incorrect2.toUpperCase()===this.props.currentAnswer.toUpperCase()))
        answers.push(incorrect1,incorrect2)
        return shuffle(answers)
    }

    checkAnswer =(value)=>{
        
        if( value !== this.props.currentAnswer){
            const message = (
                <div>
                    <p>Wrong!</p>
                    <p>The correct answer is: <b>{this.props.currentAnswer}</b></p>
                </div>
            )
            
            this.props.showAlert("fas fa-times-circle", message, "Next Question", this.props.nextQuestion, true, true)
            this.props.loseCounterUp();
            this.props.resetCounter()
        } else {
            this.props.showAlert("fas fa-check-circle","Well Done","Next Question",this.props.nextQuestion,true)
            if( this.props.gameStat.counter === 3){
                console.log()
                this.props.resetCounter();
                this.props.levelUp();
                this.props.getNewQuestions(this.props.gameStat.level, 5);
                this.props.scoreUp()
                alert('Ready for the next level? More dogs!')
            } else {
                this.props.scoreUp();
                this.props.counterUp();
            }
            
            
        }
        if (this.props.questionList.length === 0){
            alert("GAME OVER LOOSER")
            this.props.resetGameStats()
            this.props.getNewQuestions(0, 5)

        }else{
            this.props.nextQuestion()
        }
    }

    render(){ 
        let answers = this.generateOptions();
        return (  
        <div className="optionsContainer">
                <OptionComponents onclick={() => this.checkAnswer(answers[0])} breed={answers[0]}/>
                <OptionComponents onclick={() => this.checkAnswer(answers[1])} breed={answers[1]}/>
                <OptionComponents onclick={() => this.checkAnswer(answers[2])} breed={answers[2]}/>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        breeds : state.breeds,
        currentAnswer : state.questions.currentQuestion.correctAnswer,
        currentQuestion : state.questions.currentQuestion.question,
        gameStat: state.gameStat,
        questionList : state.questions.questionList
    }
}

export default connect(mapStateToProps, {resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, getNewQuestions,nextQuestion,resetGameStats,showAlert })(OptionContainer)

