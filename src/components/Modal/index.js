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
    displayButton: false
  }


  clickHandler = () => {
    this.props.message.action()
    this.props.hideAlert()
  }

  render() {
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
          <button onClick={this.clickHandler}>{this.props.message.buttonText}</button>
          {this.props.message.loader &&  <Loader/>}
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      message: state.message
  }
}

export default connect(mapStateToProps,{hideAlert})(MessageModal)