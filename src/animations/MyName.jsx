import React from "react";
import {findDOMNode} from "react-dom";
import { TweenMax,Elastic } from "gsap";


function makeFlip(){
    
    return class Flip extends React.Component{
        state = {
            duration: this.props.duration
          };
        componentDidMount (callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, this.state.duration, {x: 100, rotationY: 180, opacity: 0}, {x: 0, rotationY:0, opacity:1, ease: Elastic.easeOut.config(0.22,1),  onComplete: callback})
        }

        componentWillLeave(callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 0, {rotationY: 0, opacity: 0}, {rotationY:-180, opacity:0, onComplete: callback})
        }
        render(){
            return (
                <div>{this.props.children}</div>
            )
        }
    }
}

export default  makeFlip();
