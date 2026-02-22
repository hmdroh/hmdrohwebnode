import React from "react";
import { gsap, Elastic } from "gsap";
import Img from "../../assets/svg/hmd.svg";

export type ProjectAnimProps = Readonly<{
  duration: number | string;
  tech?: string[];
  link: string;
  children?: React.ReactNode;
}>;

export default function Project({ duration, tech = [], link, children }: ProjectAnimProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const d = typeof duration === "string" ? Number(duration) : duration;
    gsap.fromTo(
      el,
      { y: 100, rotationY: 20, opacity: 0 },
      {
        duration: Number.isFinite(d) ? d : 0.6,
        y: 0,
        rotationY: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(0.22, 1)
      }
    );
  }, [duration]);

  return (
    <div ref={ref}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-content">
          <div className="project-img">
            <img src={Img} alt="project" />
          </div>
          <div className="project-title">{children}</div>
          <div className="project-tech">
            {tech.map((name) => (
              <div key={name} className="skills-small-div">
                {name}
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

