import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
import moment from 'moment';
import 'moment-timezone';

export default class TimeClock extends React.Component {

    constructor(props) {
      super(props);
      this.state = { time: moment().clone().toLocaleString() };
      this.displayTime = this.displayTime.bind(this);
    }

    displayTime(){
        //let now = moment();
        //let location = now.clone();
        this.setState({
            time: moment().clone().toLocaleString()
        });
        //return location.toLocaleString();
    }
    componentDidMount() {
        // Arrow function allows you to use "this" in context of the Component
        this.interval = setInterval( () => {
            this.displayTime();
        }, 1000 );
    }
    render(){
        //let now = moment();
        //let location = now.clone();
        //let timezone = this.props.timezone;
        return (
            <div className="momentTimer">
                <p>{this.state.time}</p>
            </div>
        );
    }
}

