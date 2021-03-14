import React from 'react';
import Mock from '../illustration-mockups.svg';
import Pinkbutton from './Pinkbutton';


function Header() {
  return (
    <div className='row d-flex flex-row justify-content-between mt-4'>
      <header className='mt-5 col-12 col-sm-6'>
        <h1 className='font'>Build The Community <br /> Your Fans Will Love</h1>
        <p className='font-2'>
            Huddles re-imagines the way we build communities. You have <br />
            a voice, but so does your audience. Create connections with <br /> 
            your users as you engage in genuine discussions.
        </p>
        <Pinkbutton name="Get Started For Free" />
      </header>
      <img src={Mock} alt="mock-up" className='col-12 col-sm-6 mtx'  style={{width:"50%", height:'40%'}}/>
    </div>
  )
}

export default Header
