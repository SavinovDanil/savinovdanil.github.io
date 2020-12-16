import React from 'react';
import './ThirdBlock.css';

import FirstSLide from './first-slide/FirstSlide';
import SecondSlide from './second-slide/SecondSlide';
import ThirdSlide from './third-slide/ThirdSlide';

import horizontalScroll from '../../utils/horizontalScroll';
import Scroller from '../../components/scroll/Scroller';

class ThirdBlock extends React.Component {
  state = {
    activeSlide: 0,
    prevSlide: 0
  }

  componentDidMount() {
    this.scroller = horizontalScroll();
  }

  onSlideChange(active) {
    if (active === this.state.activeSlide) return
    if(this.state.activeSlide < active) {
      this.scroller.moveRight(this.state.activeSlide, active);
    } else {
      this.scroller.moveLeft(this.state.activeSlide, active);
    }
    this.setState({
      activeSlide: active
    })
    
  }
  
  render() {
    return (
      <div className='third-block'>
        <div className='slides-wrapper'>
          <FirstSLide/>
          <SecondSlide/>
          <ThirdSlide/>
        </div>
        <Scroller changeSlide={this.onSlideChange.bind(this)}/>
      </div>
    )
  }
}

export default ThirdBlock;