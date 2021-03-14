import React from 'react'
import grow from '../illustration-grow-together.svg'

function Grow() {
  return (
    <div className='card row d-flex flex-row justify-content-between mt-5 shadow'>
                            {/* For Mobile */}
      <img src={grow} alt="grow-together" className='d-sm-none' style={{width:"80%", height:'50%', margin:'0 auto'}}/>
      <div className="d-sm-none mx-4 m">
        <h2 className='card-title font'>Grow Together</h2>
        <p className='card-text center'>
            Generate meaningful discussions with your audience and<br />
            build a strong, loyal community. Think of the insightful<br />
            conversation you miss out on with a feedback form.
        </p>
      </div>
                        {/* For Laptop and Desktop */}
      <div className="hidden-xs mx-4 m">
        <h2 className='card-title font'>Grow Together</h2>
        <p className='card-text'>
            Generate meaningful discussions with your audience and<br />
            build a strong, loyal community. Think of the insightful<br />
            conversation you miss out on with a feedback form.
        </p>
      </div>
      <img src={grow} alt="grow-together" className='hidden-xs' style={{width:"40%", height:'50%', margin:'3%'}}/>
    </div>
  )
}
export default Grow;