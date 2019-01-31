import React, { Component } from 'react'
import Modal from 'react-modal';
import {connect} from 'react-redux'
import {hideAlert} from '../../actions/message'
import Loader from '../Loader'
import './modal.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign            : 'center',
    borderRadius: '5px'
  }
}


class MessageModal extends Component {
  state = {
    displayButton: false,
    stop:false
  }

  clickHandler = () => {
    // this.props.message.action()
    this.props.hideAlert()
  }

  timer(){
    setTimeout(() => {
      this.props.hideAlert();
      if(this.props.message.action!==null){this.props.message.action()}
    }, 2000)
  }

  render() {
    if(this.props.message.display){
      return (
        <div>
          <Modal
            ariaHideApp={false}
            isOpen={this.props.message.display}
            onRequestClose={this.closeModal}
            contentLabel="Message"
            style={customStyles}
          >
            <i className={this.props.message.icon+" icon"}></i>
            <h2>{this.props.message.message}</h2>
            <div className='message_image-container'>
              {this.props.message.image && <img className='correct_image' src={this.props.message.image} alt='Correct Answer'/>}
            </div>
            {//<button onClick={this.close}>{this.props.message.buttonText}</button>
            }
            {this.props.message.loader &&  <Loader/>}
            {this.timer()}
          </Modal>
        </div>
      )
    }else{
      return<div></div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
      message: state.message
  }
}

export default connect(mapStateToProps,{hideAlert})(MessageModal)