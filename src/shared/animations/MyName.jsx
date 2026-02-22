import React from "react";
import { gsap, Elastic } from "gsap";

function makeFlip() {
  return class Flip extends React.Component {
    elRef = React.createRef();

    state = {
      duration: this.props.duration
    };
    componentDidMount(callback) {
      const el = this.elRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { x: 100, rotationY: 180, opacity: 0 },
        {
          duration: this.state.duration,
          x: 0,
          rotationY: 0,
          opacity: 1,
          ease: Elastic.easeOut.config(0.22, 1),
          onComplete: callback
        }
      );
    }

    componentWillLeave(callback) {
      const el = this.elRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { rotationY: 0, opacity: 0 },
        { duration: 0, rotationY: -180, opacity: 0, onComplete: callback }
      );
    }
    render() {
      return <div ref={this.elRef}>{this.props.children}</div>;
    }
  };
}

export default makeFlip();

