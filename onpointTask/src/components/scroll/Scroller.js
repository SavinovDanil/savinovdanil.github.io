import React, {Component} from 'react';
import './Scroller.css';

class Scroller extends Component {
    state = {
        position: 0,
        startPos: 0,
        endPosition: 588,
        centerPos: 296,
        touchEnd: false
    }

    onTouchStart(e) {
        this.setState({
            touchEnd: false,
            startPos: e.touches[0].clientX - this.state.position
        })
    }

    onTouchMove(e) {
        const {position, centerPos, endPosition} = this.state;
        const relPos = e.touches[0].clientX - this.state.startPos;
        console.log(relPos)
        if (relPos >= this.state.endPosition || relPos <= 0) return
        this.setState({
            position: relPos
        })
        if (position < centerPos / 2) {
            this.props.changeSlide(0);
        } else if (position >= centerPos / 2 && position < endPosition - ((endPosition - centerPos) / 2)) {
            this.props.changeSlide(1);
        } else {
            this.props.changeSlide(2);
        }
    }

    onTouchEnd(e) {
        const {position, centerPos, endPosition} = this.state;
        this.setState({
            touchEnd: true
        })
        if (position < centerPos / 2) {
            this.setState({position: 0});
        } else if (position >= centerPos / 2 && position < endPosition - ((endPosition - centerPos) / 2)) {
            this.setState({position: centerPos});
        } else {
            this.setState({position: endPosition});
        }
    }

    render() {
        const {position} = this.state;
        //console.log(position);
        return (
            <div className='scroller'>
                <div className='scroller-line'>
                    <div className='scroller-progress'
                         style={{width: position, transition: this.state.touchEnd ? '1s' : '0s'}}></div>
                    <div
                        className='scroller-icon'
                        style={{
                            transform: `translate(${this.state.position}px, -50%)`,
                            transition: this.state.touchEnd ? '1s' : '0s'
                        }}
                        onTouchStart={this.onTouchStart.bind(this)}
                        onTouchMove={this.onTouchMove.bind(this)}
                        onTouchEnd={this.onTouchEnd.bind(this)}
                    >
                    </div>
                </div>
                <div className='scroller-points'>
                    <span>1988</span>
                    <span>2009</span>
                    <span>2016</span>
                </div>
            </div>
        )
    }

}

export default Scroller;