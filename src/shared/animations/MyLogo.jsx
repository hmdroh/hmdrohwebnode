import React from "react";
import { gsap, Elastic } from "gsap";
import logo from "../../assets/svg/hmd.svg";

function makeFlip() {
  return class Flip extends React.Component {
    elRef = React.createRef();

    componentDidMount(callback) {
      const el = this.elRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 600, rotationY: 200, opacity: 0 },
        {
          duration: 0.6,
          y: 0,
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
      return (
        <div ref={this.elRef}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }
  };
}

export default makeFlip();

