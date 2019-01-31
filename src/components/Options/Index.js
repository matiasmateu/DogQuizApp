import React, { Component } from 'react';
import OptionComponents from './OptionComponents'
import { connect } from 'react-redux'
import { resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, resetGameStats } from '../../actions/gameStat'
import { genQuestionMix, nextQuestion } from '../../actions/questions'
import {showAlert} from '../../actions/message'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import shuffle from '../../tools/ArrayShuffle'
import {questionOneExample} from '../../reducers/questions'
import {questionTwoExample} from '../../reducers/questions'
import OptionImageComponent from './OptionImageComponent';


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


    checkAnswer = (value) =>{
        console.log('CHECK_ANSWE', value)

       
        if( value !== this.props.currentQuestion.option1) {

            this.props.showAlert("fas fa-times-circle",`That's not the correct answer, the correct answer is ${this.props.currentQuestion.option1}.`,"Next Question",this.props.nextQuestion,true)
            // ${this.props.questionList.length} questions left
            this.props.loseCounterUp();
            this.props.resetCounter()

        }   else {

            this.props.showAlert("fas fa-check-circle","Well Done","Next Question",this.props.nextQuestion,true,true)
            if( this.props.gameStat.counter+1 === 3){
                // this.props.getNewQuestions(this.props.gameStat.level, 5);
                this.props.resetCounter();
                this.props.levelUp();
                this.props.scoreUp()
                this.props.showAlert("fas fa-arrow-circle-up",`Level:${this.props.gameStat.level+1}`,"Next Question",this.props.nextQuestion,true,true)
            } else {
                this.props.scoreUp();
                this.props.counterUp();
            }
        }
        if (this.props.questionList.length === 0){
            this.props.showAlert("fas fa-skull-crossbones","GAME OVER!","Restart Game",this.props.resetGameStats,true,false)
            this.props.getNewQuestions(0, 5)
        }
    }

  
    render(){ 

        if(this.props.currentQuestion) {

            let currentQuestion = this.props.currentQuestion
            const opt1 = currentQuestion.option1
            const opt2 = currentQuestion.option2
            const opt3 = currentQuestion.option3
            const options = shuffle([opt1, opt2, opt3])

            const keyboardEvent = (event) => {
                console.log(event)
                switch(event) {
                    case "a":
                    console.log(options[0])
                      this.checkAnswer(options[0])
                      break;
                    case "b":
                    console.log(options[1])
                      this.checkAnswer(options[1])
                      break;
                    case "c":
                    console.log(options[2])
                     this.checkAnswer(options[2])
                     break;
                    default:
                    return null
                  }
            }

            if (currentQuestion.type===1){
                return (  
                    <div className="optionsContainer">
                        <KeyboardEventHandler handleKeys={['a', 'b', 'c']} onKeyEvent={(key, e) => keyboardEvent(key)} />
                        <OptionComponents  onClick={() => {this.checkAnswer(options[0])}} breed={options[0]}/>
                        <OptionComponents  onClick={() => {this.checkAnswer(options[1])}} breed={options[1]}/>
                        <OptionComponents  onClick={() => {this.checkAnswer(options[2])}} breed={options[2]}/>
                    </div>
                )
            }else{
                return (  
                    <div className="optionsContainer">
                    <KeyboardEventHandler handleKeys={['a', 'b', 'c']} onKeyEvent={(key, e) => keyboardEvent(key)} />
                        <OptionImageComponent  onClick={() => {this.checkAnswer(options[0])}} breed={options[0]}/>
                        <OptionImageComponent  onClick={() => {this.checkAnswer(options[1])}} breed={options[1]}/>
                        <OptionImageComponent  onClick={() => {this.checkAnswer(options[2])}} breed={options[2]}/>
                    </div>
                )
            }
        } else {
            return (<div>Loading...</div>)
        }
        
    }
}
        

const mapStateToProps = (state) => {
    console.log(state, 'STATE')
    return {
        breeds : state.breeds,
        currentQuestion : state.questions.currentQuestion,
        gameStat: state.gameStat,
        questionList : state.questions.questionList
    }
}

export default connect(mapStateToProps, {resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, genQuestionMix,nextQuestion,resetGameStats,showAlert })(OptionContainer)

