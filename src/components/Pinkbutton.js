import React from 'react';

function Pinkbutton(props) {
  return (
    <div className='center'>
      <div className='btn btn-light c rounded-pill mt-2 p' href='#'>
        {props.name}
      </div>
    </div>
  )
}

export default Pinkbutton;