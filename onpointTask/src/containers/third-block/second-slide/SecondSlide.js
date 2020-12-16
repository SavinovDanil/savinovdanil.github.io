import React from 'react';
import './SecondSlide.css'

import Ice from '../../../components/ice/ice';

const SecondSLide = props => {
  
  return (
    <div className='second-slide horizontal-slide'>
      <div className='second-slide-title'>Смертельный октет</div>
      <div className='second-slide-box'></div>
      <Ice id='8' top='94' left='474'/>
      <Ice id='9' top='239' left='46'/>
      <Ice id='10' top='571' left='899'/>
    </div>
  )
}

export default SecondSLide;