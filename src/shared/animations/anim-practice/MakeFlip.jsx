import React from "react";
import { gsap, Elastic } from "gsap";
import ReportCard from "./ReportCard";
import ResultCard from "./ResultCard";

function makeFlip(Component) {
  return class Flip extends React.Component {
    elRef = React.createRef();

    componentDidMount(callback) {
      const el = this.elRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { x: 0, rotationY: 20, opacity: 0 },
        {
          duration: 1,
          x: 100,
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
          <Component {...this.props} />
        </div>
      );
    }
  };
}

export const Front = makeFlip(ResultCard);
export const Back = makeFlip(ReportCard);

