import React, { Component } from 'react';
import OptionComponents from './OptionComponents'
import { connect } from 'react-redux'

class OptionContainer extends Component{

    checkAnswer = () => {
        // True => update score
        // False => 
        // Get next question
    }

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
        }while((incorrect1===incorrect2)||(incorrect1===this.props.currentAnswer)||(incorrect2===this.props.currentAnswer))
        answers.push(incorrect1,incorrect2)
        return this.shuffle(answers)
    }

    /**
    * Shuffles an array.
    * @param {Array} a items An array containing the items.
    */
     shuffle(a) {
        var j, x, i
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
        return a
    }
    
    onclick (value){
    console.log(value)
    }

    render(){ 
        let answers = this.generateOptions();
        return (  
        <div className="optionsContainer">
                <OptionComponents onclick={() => this.onclick(answers[0])} breed={answers[0]}/>
                <OptionComponents onclick={() => this.onclick(answers[1])} breed={answers[1]}/>
                <OptionComponents onclick={() => this.onclick(answers[2])} breed={answers[2]}/>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
        breeds : state.breeds,
        currentAnswer : state.questions.currentQuestion.correctAnswer
    }
}

export default connect(mapStateToProps)(OptionContainer)