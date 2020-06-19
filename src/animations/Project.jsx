import React from "react";
import {findDOMNode} from "react-dom";
import { TweenMax,Elastic } from "gsap";
import Img from "../hmd.svg";


function makeProject(){
    
    return class Project extends React.Component{
        state = {
            duration: this.props.duration,
            tech: []
          };
        componentDidMount (callback){
            this.setState({tech: this.props.tech});
            
            const el = findDOMNode(this);
            TweenMax.fromTo(el, this.state.duration, {y: 100, rotationY: 20, opacity: 0}, {y: 0, rotationY:0, opacity:1, ease: Elastic.easeOut.config(0.22,1),  onComplete: callback})
        }

        componentWillLeave(callback){
            const el = findDOMNode(this);
            TweenMax.fromTo(el, 0, {rotationY: 0, opacity: 0}, {rotationY:-180, opacity:0, onComplete: callback})
        }
        render(){
            return (
                // <div></div>
                <div>
                    <a href={this.props.link}  target="_blank">
                <div className="project-content">
                    <div className="project-img"><img src={Img} alt="project" /></div>
                    <div className="project-title">{this.props.children}</div>
                    <div classname="project-tech">
                    {this.state.tech.map((number) =>
                    <div className="skills-small-div">{number}</div>)}
                    </div>
                    </div>
                    </a>
                    </div>
                
            )
        }
    }
}

export default  makeProject();
