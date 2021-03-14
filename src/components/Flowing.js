import React from 'react'
import flow from '../illustration-flowing-conversation.svg'

function Flowing() {
  return (
    <div className='card row d-flex flex-row justify-content-between mt-5 shadow'>
                                {/* For Laptop and Desktop */}
        <img src={flow} alt="flowing conversation" className='hidden-xs' style={{width:"40%", height:'50%', margin:'3%'}}/>
        <div className="mx-4 m hidden-xs">
            <h2 className='card-title font'>Flowing Conversations</h2>
            <p className='card-text'>
                You wouldn't paginate a conversation in real life, so why do<br />
                it online? Our threads have just-in-time loading for a more<br />
                natural flow.
            </p>
        </div>
                                        {/* For Mobile */}
        <img src={flow} alt="flowing conversation" className='col-12 d-sm-none' style={{width:"40%", height:'50%', margin:'0 auto'}}/>
        <div className="mx-4 m d-sm-none center">
            <h2 className='card-title font'>Flowing Conversations</h2>
            <p className='card-text'>
                You wouldn't paginate a conversation in real life, so why do<br />
                it online? Our threads have just-in-time loading for a more<br />
                natural flow.
            </p>
        </div>
    </div>
  )
}
export default Flowing;