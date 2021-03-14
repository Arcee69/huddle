import React from 'react'

function Button(props) {
  return (
    <div className='btn btn-light rounded-pill mt-2 w'>
      {props.name}
    </div>
  )
}

export default Button
