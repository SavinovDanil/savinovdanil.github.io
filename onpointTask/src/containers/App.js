import React from 'react';
import './App.css';

import FirstBlock from './first-block/FirstBlock';
import SecondBlock from './second-block/SecondBlock';
import ThirdBlock from './third-block/ThirdBlock';
import Navbar from '../components/navbar-switch/Navbar';

class App extends React.Component {
  state = {
    current: 0,
    translateLayer: false
  }

  onTouchStart (e) {
    this.startTouchY = e.touches[0].clientY;
    this.setState({translateLayer: false})
  }
  onTouchEnd (e) {
    this.EndTouchY = e.changedTouches[0].clientY;
    if(this.startTouchY - this.EndTouchY > 50 && this.state.current <= 1) {
      this.setState({current: +this.state.current + 1, translateLayer: true})
    }
    if(this.startTouchY - this.EndTouchY < -50 && this.state.current >= 1) {
      this.setState({current: +this.state.current - 1,  translateLayer: true})
    }
  }

  onChangeSlide (e) {
    console.log(e.target.id);
    this.setState({current: e.target.id, translateLayer: true})
  }

  render() {
    return (
      <div className="App" onTouchStart={this.onTouchStart.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>
        <Navbar changeSlide={this.onChangeSlide.bind(this)} current={this.state.current}/>
        <div className='App-wrapper' style={{transform: `translateY( ${this.state.current * -100}%)`}}>
          <FirstBlock translateLayer={this.state.translateLayer} current={this.state.current}/>
          <SecondBlock current={this.state.current}/>
          <ThirdBlock/>
        </div>
      </div>
    );
  }
}

export default App;
