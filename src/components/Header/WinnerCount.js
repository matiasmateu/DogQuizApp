import React from 'react'

export default (props) => {
  return (
    <div className='winner-counter'>
      { displayFires(props.total) }
    </div>
  )
}

const displayFires = (number) => {
  switch(number) {
    case 1:
    return <div>
      <i class="fas fa-fire"></i>
      <i class="fas fa-fire"></i>
      <i class="fas fa-fire"></i>
    </div>
    case 2:
    return <div></div>
    default:
    return <div>
        <i className='fire-icon' class="fas fa-fire"></i>
        <i  className='fire-icon' class="fas fa-fire"></i>
        <i className='fire-icon' class="fas fa-fire"></i>
      </div>
  }
}