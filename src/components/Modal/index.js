import React, { Component } from 'react'
import Modal from 'react-modal';
import {connect} from 'react-redux'
import {hideAlert} from '../../actions/message'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign            : 'center'
  }
};

class MessageModal extends Component {

  state = {
    modalIsOpen: false
  }

  closeModal = () => {
    
  }

  openModal = () => {
    
  }

  clickHandler = () => {
    this.props.message.action()
    this.props.hideAlert()
  }

  render() {
    return (
      <div className='yourAppElement'>
        <Modal
          ariaHideApp={false}
          isOpen={this.props.message.display}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <i className={this.props.message.icon}></i>
          <h2>{this.props.message.message}</h2>
          <button onClick={this.clickHandler}>{this.props.message.buttonText}</button>
  
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      message: state.message
  }
}

export default connect(mapStateToProps,{hideAlert})(MessageModal)