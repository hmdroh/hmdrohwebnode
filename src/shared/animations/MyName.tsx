import React from "react";
import { gsap, Elastic } from "gsap";

export type MyNameProps = Readonly<{
  duration?: number | string;
  children: React.ReactNode;
}>;

export default function MyName({ duration = 0.84, children }: MyNameProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const d = typeof duration === "string" ? Number(duration) : duration;
    gsap.fromTo(
      el,
      { x: 100, rotationY: 180, opacity: 0 },
      {
        duration: Number.isFinite(d) ? d : 0.84,
        x: 0,
        rotationY: 0,
        opacity: 1,
        ease: Elastic.easeOut.config(0.22, 1)
      }
    );
  }, [duration]);

  return <div ref={ref}>{children}</div>;
}

