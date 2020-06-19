import React from "react";
import {findDOMNode} from "react-dom";
import { TweenMax,Elastic } from "gsap";
import ReportCard from "./ReportCard";
import ResultCard from "./ResultCard";

function makeFlip(Component){
    return class Flip extends React.Component{
        
        componentDidMount (callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 1, {x: 0, rotationY: 20, opacity: 0}, {x: 100, rotationY:0, opacity:1, ease: Elastic.easeOut.config(0.22,1),  onComplete: callback})
        }

        componentWillLeave(callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 0, {rotationY: 0, opacity: 0}, {rotationY:-180, opacity:0, onComplete: callback})
        }
        render(){
            return <Component { ...this.props } />
        }
    }
}

export const Front = makeFlip(ResultCard);
export const Back = makeFlip(ReportCard);