import React from 'react'

export default (props) => {
  return (
    <div >
      { displayFires(props.total) }
    </div>
  )
}

const displayFires = (number) => {
  switch(number) {
    case 1:
    return(
      <div className='winner-counter'>
        <i className="fas fa-fire"></i>
      </div>
    )
    case 2:
    return(
      <div className='winner-counter'>
        <i className="fas fa-fire"></i>
        <i className="fas fa-fire"></i>
      </div>
    )
    case 3: 
      return (
        <div className='winner-counter'>
          <i class="fas fa-fire"></i>
          <i class="fas fa-fire"></i>
          <i class="fas fa-fire"></i>
        </div>
      )
    default:
    return <div className='winner-counter'></div>
  }
}