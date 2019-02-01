import React from 'react'
import Repeat from 'react-repeat-component';

export default (props) => {
  return (
    <div className='winner-counter'>
      <Repeat times={props.total}>
      {(i) => <i key={i} style={{backgroundColor: 'transparent'}} class="fas fa-fire"></i>}
      </Repeat>
    </div>
  )
}