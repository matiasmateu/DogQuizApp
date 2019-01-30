import React, { Component } from 'react'
import Modal from 'react-modal';



export default class extends Component {

  state = {
    modalIsOpen: false
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

 

  render() {
    return (
      <div className='yourAppElement'>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
 
          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }
}