import React, { Component } from 'react';
import axios from 'axios'
import Game from './Game';
import { connect } from 'react-redux'
import { levelUp } from '../../actions/gameStat'


class GameContainer extends Component{

    state = {
        breeds: null,
        maxQuestionPerBreed: 3
    }

    componentDidMount() {

        
        this.levelUp()

        setTimeout(() => {
            this.levelUp()
        }, 2000);
        

    }

    levelUp = () => {


        

        const level = this.props.gameStat.level + 1
        const totalBreed = level * 3
        
        console.log(level, '<===LEVELL')

        axios.get('https://dog.ceo/api/breeds/list/all').then( async (result) => {
            // get only amount of totalBreed
            const breeds = Object.keys(result.data.message).slice(0, totalBreed)
            const questions = await this.getQuestionList(breeds)
            console.log(questions, 'QUESTIONSS')
        })





        this.props.levelUp()
    }

    getQuestionList = (breeds) => {
        return new Promise(async (resolve, reject) => {
            const questions = [];

            await breeds.map(async (breed) => {
                const images = await this.fetchImage(breed)

                for(let i =0; i < this.state.maxQuestionPerBreed; i++) {
                    questions.push({
                        question: images[i],
                        answer: breed
                    })
                }
            })

            resolve(questions)
        })
        

        

        
    }

    fetchImage =  (breed) => {
        return new Promise((resolve) => {
                axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((result) => {
                resolve(result.data.message)
            })
        })
        
    }

    

    render(){ 
        return ( 
        <Game/>
    )}
}

const mapStateToProps = (state) => {
    console.log(state.gameStat.level)
    return {
        currentQuestion: state.questions.currentQuestion,
        gameStat: state.gameStat
    }
}

export default connect(mapStateToProps, { levelUp })(GameContainer)