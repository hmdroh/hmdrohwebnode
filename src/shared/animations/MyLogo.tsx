import React from "react";
import { gsap, Elastic } from "gsap";
import logo from "../../assets/svg/hmd.svg";

export default function MyLogo() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 600, rotationY: 200, opacity: 0 },
      {
        duration: 0.6,
        y: 0,
        rotationY: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(0.22, 1)
      }
    );
  }, []);

  return (
    <div ref={ref}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

