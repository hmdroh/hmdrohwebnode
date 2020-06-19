import React from "react";
import {findDOMNode} from "react-dom";
import { TweenMax,Elastic } from "gsap";
import logo from "../hmd.svg";


function makeFlip(){
    
    return class Flip extends React.Component{
        
        componentDidMount (callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 0.6, {y: 600, rotationY: 200, opacity: 0}, {y: 0, rotationY:0, opacity:1, ease: Elastic.easeOut.config(0.22,1),  onComplete: callback})
        }

        componentWillLeave(callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 0, {rotationY: 0, opacity: 0}, {rotationY:-180, opacity:0, onComplete: callback})
        }
        render(){
            return (
                <div>
                        <img src={logo} className="App-logo" alt="logo" />                    
                </div>
            )
        }
    }
}

export default  makeFlip();
