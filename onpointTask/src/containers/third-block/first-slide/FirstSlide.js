import React from 'react';
import './FirstSlide.css'

import Ice from '../../../components/ice/ice';

const FirstSLide = () => {
  return (
    <div className='first-slide horizontal-slide'>
      <div className='first-slide-title'>Звенья патогенеза СД2</div>
      <div className='first-slide-box'></div>
      <Ice id='5' top='112' left='911'/>
      <Ice id='6' top='227' left='666'/>
      <Ice id='7' top='554' left='21'/>
    </div>
  )
}

export default FirstSLide;