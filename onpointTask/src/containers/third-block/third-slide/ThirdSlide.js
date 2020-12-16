import React from 'react';
import './ThirdSlide.css'

import Ice from '../../../components/ice/ice';

const ThirdSLide = props => {
  return (
    <div className='third-slide horizontal-slide'>
      <div className='third-slide-title'>Звенья патогенеза СД2</div>
      <div className='third-slide-box'></div>
      <Ice id='11' top='109' left='-5'/>
      <Ice id='12' top='212' left='936'/>
      <Ice id='13' top='588' left='153'/>
    </div>
  )
}

export default ThirdSLide;