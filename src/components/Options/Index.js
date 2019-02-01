import React, { Component } from 'react';
import OptionComponents from './OptionComponents'
import { connect } from 'react-redux'
import { resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, resetGameStats } from '../../actions/gameStat'
import { genQuestionMix, nextQuestion, emptyQuestionList } from '../../actions/questions'
import {showAlert} from '../../actions/message'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import OptionImageComponent from './OptionImageComponent';
import './OptionContainer.css'
import { addBreedToHistory } from '../../actions/questions'


class OptionContainer extends Component{
    //state = {
    //   current: {}
    //}

checkAnswer = (value) =>{
    const { correctAnswer, question } = this.props.currentQuestion;
    // Adds the current breed to the history so we can know that the hint of this breed must not be displayed again
    if (this.props.currentQuestion.type===1){
       this.props.addBreedToHistory(correctAnswer)
    } else {
        this.props.addBreedToHistory(question)
    }

    // GAME LOGIC
    
	if( value !== correctAnswer) {
        if(this.props.currentQuestion.type === 2) {
            // WRONG ANSWER QUESTION TYPE 2
            this.props.showAlert("fas fa-times-circle",`Wrong!, the correct answer is:`,"Next Question",this.props.nextQuestion,true, true, correctAnswer)
        }else{
            // WRONG ANSWER QUESTION TYPE 1
            this.props.showAlert("fas fa-times-circle",`That's not the correct answer, the correct answer is ${correctAnswer}.`,"Next Question",this.props.nextQuestion,true)
        }
        this.props.loseCounterUp();
        this.props.resetCounter()
        }else{
            // LEVEL UP
            if( this.props.gameStat.counter+1 === 3){
                this.props.showAlert("fas fa-arrow-circle-up",`Level:${this.props.gameStat.level+1}`,"Next Level",this.levelUp,true,true)
            } else {
                // CORRECT ANSWER
                this.props.showAlert("fas fa-check-circle","Well Done","Next Question",this.props.nextQuestion,true,true)
                this.props.scoreUp();
                this.props.counterUp();
			}
        }
        // GAME OVER
		if (this.props.questionList.length === 0){
			this.props.showAlert("fas fa-skull-crossbones","GAME OVER!","Restart Game",this.newGame,true,false)
		}
	}
    
    // RESET STATS AND STATE
    newGame = () => {
		this.props.resetGameStats()
		this.props.emptyQuestionList()
		this.props.genQuestionMix(1, 25)
	}

	levelUp = () => {
		this.props.emptyQuestionList()
		this.props.genQuestionMix(this.props.gameStat.level, 25)
		this.props.resetCounter()
		this.props.levelUp()
		this.props.scoreUp()
    }

    componentDidMount() {
        this.setState({current: this.props.currentQuestion})
    }
  
    render(){ 
        let currentQuestion = this.props.currentQuestion
        const { options, correctAnswer } = currentQuestion
        let hint = false
        const keyboardEvent = (event) => {
                switch(event) {
                    case "1":
                      this.checkAnswer(options[0])
                      break;
                    case "2":
                      this.checkAnswer(options[1])
                      break;
                    case "3":
                     this.checkAnswer(options[2])
                     break;
                    default:
                    return null
                  }
            }

        if (currentQuestion.type === 1){
            // HINT LOGIC TYPE 1
            if (this.props.breeds.indexOf(correctAnswer)>-1){
                hint = false
            }else{
                hint = true
            }

            return (  
                <div className="optionsContainer">
                    <KeyboardEventHandler handleKeys={['1', '2', '3']} onKeyEvent={(key, e) => keyboardEvent(key)} />
                    {options.map((option,i) => <OptionComponents correct={correctAnswer} key={option} onClick={() => {this.checkAnswer(option)}} index={i} breed={option} hint={hint}/>)} 
                </div>
            )
        }else {

            // HINT LOGIC TYPE 2
            if (this.props.breeds.indexOf(this.props.currentQuestion.question) > -1){
                hint = false
            }else{
                hint = true
            }
    
         return (  
            <div className="optionImageComponent">
                <KeyboardEventHandler handleKeys={['1', '2', '3']} onKeyEvent={(key, e) => keyboardEvent(key)} />
                {options.map((option,i) => <OptionImageComponent correct={correctAnswer}  key={option} onClick={() => {this.checkAnswer(option)}} index={i} breed={option} hint={hint}/>)} 
            </div>
        )
         }
    } 
}

const mapStateToProps = (state) => {
    return {
        breeds : state.questions.breeds,
        currentQuestion : state.questions.currentQuestion,
        gameStat: state.gameStat,
        questionList : state.questions.questionList
    }
}

export default connect(mapStateToProps, {
	resetCounter, 
	scoreUp, 
	counterUp, 
	levelUp, 
	loseCounterUp, 
	genQuestionMix,
	nextQuestion,
	resetGameStats,
	showAlert,
	emptyQuestionList,
    addBreedToHistory
})(OptionContainer)


