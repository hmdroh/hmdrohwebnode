import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const VARIANTS = {
  appear: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }
};

export function Appear({
  children,
  className = "",
  variant = "appear",
  delay = 0,
  duration = 0.5,
  viewportOptions = { once: true, margin: "0px", threshold: 0.1 }
}) {
  const ref = React.useRef(null);
  const hasAnimatedRef = React.useRef(false);

  const once = viewportOptions?.once ?? true;
  const margin = viewportOptions?.margin ?? "0px";
  const threshold = viewportOptions?.threshold ?? 0.1;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chosen = VARIANTS[variant] || VARIANTS.appear;
    if (once && hasAnimatedRef.current) return;

    gsap.set(el, { ...chosen.hidden, willChange: "transform,opacity" });

    const animateIn = () => {
      if (once && hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      gsap.to(el, {
        ...chosen.visible,
        duration: variant === "scaleIn" ? 0.4 : duration,
        delay,
        ease: "power3.out",
        clearProps: "willChange"
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      animateIn();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== el) continue;

          if (entry.isIntersecting) {
            animateIn();
            if (once) observer.disconnect();
          } else if (!once) {
            hasAnimatedRef.current = false;
            gsap.set(el, { ...chosen.hidden });
          }
        }
      },
      { root: null, rootMargin: margin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [
    variant,
    delay,
    duration,
    once,
    margin,
    threshold
  ]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

Appear.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "appear",
    "fadeUp",
    "fadeIn",
    "scaleIn",
    "slideLeft",
    "slideRight"
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  viewportOptions: PropTypes.shape({
    once: PropTypes.bool,
    margin: PropTypes.string,
    threshold: PropTypes.number
  })
};

