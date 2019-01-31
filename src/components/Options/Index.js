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


    checkAnswer =(value)=>{
        if( value !== this.props.currentAnswer){
            this.props.showAlert("fas fa-times-circle",`That's not the correct answer, the correct answer is ${this.props.currentAnswer}. ${this.props.questionList.length} questions left`,"Next Question",this.props.nextQuestion,true)
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
        let answers = this.generateOptions();

        let currentQuestion = questionOneExample
        if (currentQuestion.type===2){
            return (  
                <div className="optionsContainer">
                    <OptionComponents  breed={currentQuestion.option1}/>
                    <OptionComponents  breed={currentQuestion.option2}/>
                    <OptionComponents  breed={currentQuestion.option3}/>
                </div>
            )
        }else{
            return (  
                <div className="optionsContainer">
                    <OptionImageComponent  breed={currentQuestion.option1}/>
                    <OptionImageComponent  breed={currentQuestion.option2}/>
                    <OptionImageComponent  breed={currentQuestion.option3}/>
                </div>
            )
        }
    }
}
        
//         const keyboardEvent = (event) => {
//             console.log(event)
//             switch(event) {
//                 case "a":
//                 console.log(answers[0])
//                   this.checkAnswer(answers[0])
//                   break;
//                 case "b":
//                 console.log(answers[1])
//                   this.checkAnswer(answers[1])
//                   break;
//                 case "c":
//                 console.log(answers[2])
//                  this.checkAnswer(answers[2])
//                  break;
//                 default:
//                 return null
//               }
//         }
        

//<KeyboardEventHandler handleKeys={['a', 'b', 'c']} onKeyEvent={(key, e) => keyboardEvent(key)} />

const mapStateToProps = (state) => {
    return {
        breeds : state.breeds,
        currentAnswer : state.questions.currentQuestion.correctAnswer,
        currentQuestion : state.questions.currentQuestion.question,
        gameStat: state.gameStat,
        questionList : state.questions.questionList
    }
}

export default connect(mapStateToProps, {resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, genQuestionMix,nextQuestion,resetGameStats,showAlert })(OptionContainer)

