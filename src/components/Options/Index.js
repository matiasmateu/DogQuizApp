import React, { Component } from 'react';
import OptionComponents from './OptionComponents'
import { connect } from 'react-redux'
import { resetCounter, scoreUp, counterUp, levelUp, loseCounterUp, resetGameStats } from '../../actions/gameStat'
import { genQuestionMix, nextQuestion, emptyQuestionList } from '../../actions/questions'
import {showAlert} from '../../actions/message'
//import KeyboardEventHandler from 'react-keyboard-event-handler';
import shuffle from '../../tools/ArrayShuffle'
import OptionImageComponent from './OptionImageComponent';
import './OptionContainer.css'
import {removeBreed} from '../../actions/questions'


class OptionContainer extends Component{

   
checkAnswer = (value) =>{
  
  // REMOVE BREED FROM BREED ARRAY
    if (this.props.currentQuestion.type===1){
       this.props.removeBreed(this.props.currentQuestion.option1)
    }
		if( value !== this.props.currentQuestion.option1) {

			this.props.showAlert("fas fa-times-circle",`Wrong!, the correct answer is ${this.props.currentAnswer}. ${this.props.questionList.length} questions left`,"Next Question",this.props.nextQuestion,true)
			this.props.loseCounterUp();
			this.props.resetCounter()

		}   else {
				this.props.showAlert("fas fa-check-circle","Well Done","Next Question",this.props.nextQuestion,true,true)
				
				if( this.props.gameStat.counter+1 === 3){
						this.props.showAlert("fas fa-arrow-circle-up",`Level:${this.props.gameStat.level+1}`,"Next Level",this.levelUp,true,true)
				} else {
						this.props.scoreUp();
						this.props.counterUp();
				}
		}
		if (this.props.questionList.length === 0){
				this.props.showAlert("fas fa-skull-crossbones","GAME OVER!","Restart Game",this.newGame,true,false)
		}
	}

	newGame = () => {
		this.props.resetGameStats()
		this.props.emptyQuestionList()
		this.props.genQuestionMix(1, 5)
	}

	levelUp = () => {
		this.props.emptyQuestionList()
		this.props.genQuestionMix(this.props.gameStat.level, 5)
		this.props.resetCounter()
		this.props.levelUp()
		this.props.scoreUp()
	}

  
    render(){ 

        let currentQuestion = this.props.currentQuestion
        const opt1 = currentQuestion.option1
        const opt2 = currentQuestion.option2
        const opt3 = currentQuestion.option3
        const options = shuffle([opt1, opt2, opt3])
        let hint = false

        if (currentQuestion.type === 1){
            if (this.props.breeds.indexOf(this.props.currentQuestion.option1)>-1){
                hint = true
            }else{
                hint = false
            }

            console.log(hint, 'HINT')

            return (  
                <div className="optionsContainer">
                    {options.map((option) => <OptionComponents correct={opt1} key={option} onClick={() => {this.checkAnswer(option)}} breed={option} hint={hint}/>)} 
                </div>
            )
        }
     

        return (  
            <div className="optionImageComponent">
                {options.map((option) => <OptionImageComponent  onClick={() => {this.checkAnswer(option)}} breed={option}/>)} 
            </div>
        )
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
  removeBreed
})(OptionContainer)


