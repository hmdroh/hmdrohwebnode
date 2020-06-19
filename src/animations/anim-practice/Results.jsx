import React, {Component} from "react";
import {Front, Back} from "./MakeFlip";

export default class Results extends Component{
    state = {
        shouldShowResult: true,
        shouldShowReport: false
    }
    toggle = () => {
        this.setState({
            shouldShowResult: this.state.shouldShowReport,
            shouldShowReport: this.state.shouldShowResult
        })
    }
    render(){
        return (
            <div>
                <div>
                    {this.state.shouldShowResult && <Front/>}
                    {this.state.shouldShowReport && <Back/>}
                </div>
                <button onClick={this.toggle}>toggle</button>
            </div>
        )
    }
 }