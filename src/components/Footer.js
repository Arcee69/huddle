import React from 'react';
import log from '../logo2.svg';
import Location from '../icon-location.svg';
import Phone from '../icon-phone.svg';
import Email from '../icon-email.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='Footer'>
                    {/* For Mobile Phone */}
        <div className='container d-sm-none' >
          <img src={log} alt="logo" className='mg' />
          <div className='row d-flex justify-content-around'>
            <div className='w-100 mtx'>
              <div className='d-flex align-items-around col-12'>
                <img src={Location} alt="location" className='obj-1'/>
                  <span className='ml-3 fs'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                      Autem ipsam sunt alias, excepturi blanditiis beatae quia <br />
                      ad corrupti. Rem dolorum sint ad quia
                  </span>
              </div>
              <div className='w-30 d-flex mt-4 col-12'>
                <img src={Phone} alt="phone" className='obj'/>
                  <span className='ml-2 fs'>
                      +1-543-123-4567
                  </span>
              </div>
              <div className='w-30 d-flex col-12'>
                <img src={Email} alt="email" className='obj-1'/>
                  <span className='ml-2 fs'>
                      example@fylo.com
                  </span>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between w-100">
              <ul className='col-12 mtx'>
                <li><a href='true'>About Us</a></li>
                <li><a href='true'>What We Do </a></li>
                <li><a href="true">FAQ</a></li>
                <li><a href="true">Career</a></li>
                <li><a href="true">Blog</a></li>
                <li><a href="true">Contact Us</a></li>
              </ul> 
            </div>
            <div className="row w-100 mt-2 mb-3">
              <div className='col-12 center flex-column'>
                <ul className='w-50'>
                  <a href='true' className=''><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                  <a href="true" className='ml-2'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                  <a href='true' className='ml-2'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </ul>    
              </div>
              <div className='px mgx-1' >&copy; Copyright 2018 Huddle.All right reserved</div> 
            </div>
          </div>
        </div>
                      {/* For Laptop and Desktop */}
          <div className='container hidden-xs'>
          <img src={log} alt="logo" className='mg' />
          <div className='d-flex justify-content-around'>
            <div className='mr w-50'>
              <div className='d-flex align-items-around mt'>
                <img src={Location} alt="location" className='obj'/>
                  <span className='ml-3 fs'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                      Autem ipsam sunt alias, excepturi blanditiis beatae quia <br />
                      ad corrupti. Rem dolorum sint ad quia
                  </span>
              </div>
              <div className='w-30 d-flex mt-4'>
                <img src={Phone} alt="phone" className='obj'/>
                  <span className='ml-3 fs'>
                      +1-543-123-4567
                  </span>
              </div>
              <div className='w-30 d-flex'>
                <img src={Email} alt="email" className='obj-1'/>
                  <span className='ml-3 fs'>
                      example@huddle.com
                  </span>
              </div>
            </div>
            <div className="row w-50 mt-0">
              <div className="col-md-6">
                <ul className='d-flex flex-column justify-content-around'>
                  <li><a href='true'>About Us</a></li>
                  <li><a href='true'>What We Do </a></li>
                  <li><a href="true">FAQ</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className='d-flex flex-column justify-content-around'>
                  <li><a href="true">Career</a></li>
                  <li><a href="true">Blog</a></li>
                  <li><a href="true">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="row w-25 mt-2">
              <div className='col-md-6'>
                <div className='d-flex justify-content-around'>
                  <a href='true'><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                  <a href="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                  <a href='true'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>    
              </div>
              <div className='px mgx mb-3' >&copy; Copyright 2018 Huddle.All right reserved</div> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
