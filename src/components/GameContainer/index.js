import React, { Component } from 'react';
import axios from 'axios'
import Game from './Game';
import { connect } from 'react-redux'
import { levelUp } from '../../actions/gameStat'
import { getQuestionList } from '../../actions/questions'


class GameContainer extends Component{

    state = {
        breeds: null,
        maxQuestionPerBreed: 3
    }

    componentDidMount() {
        this.levelUp()
    }

    levelUp = async () => {

        const level = this.props.gameStat.level + 1
        const totalBreed = level * 3

        await axios.get('https://dog.ceo/api/breeds/list/all').then( async (result) => {
            const breeds = Object.keys(result.data.message).slice(0, totalBreed)
            const questions = await this.getQuestionList(breeds)
            this.props.getQuestionList(breeds, this.state.maxQuestionPerBreed)
        })


        // this.props.levelUp()
    }



    

    render(){ 
        return ( 
        <Game/>
    )}
}

const mapStateToProps = (state) => {
    return {
        currentQuestion: state.questions.currentQuestion,
        gameStat: state.gameStat
    }
}

export default connect(mapStateToProps, { levelUp,  getQuestionList})(GameContainer)