import React from "react";
import { gsap, Elastic } from "gsap";
import ReportCard from "./ReportCard";
import ResultCard from "./ResultCard";

function makeFlip<P extends object>(Component: React.ComponentType<P>) {
  return function Flip(props: P) {
    const ref = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { x: 0, rotationY: 20, opacity: 0 },
        {
          duration: 1,
          x: 100,
          rotationY: 0,
          opacity: 1,
          ease: Elastic.easeOut.config(0.22, 1)
        }
      );
    }, []);

    return (
      <div ref={ref}>
        <Component {...props} />
      </div>
    );
  };
}

export const Front = makeFlip(ResultCard);
export const Back = makeFlip(ReportCard);

