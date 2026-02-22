import React from "react";
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
} as const;

export type AppearVariant = keyof typeof VARIANTS;

export type AppearProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  variant?: AppearVariant;
  delay?: number;
  duration?: number;
  viewportOptions?: {
    once?: boolean;
    margin?: string;
    threshold?: number;
  };
}>;

export function Appear({
  children,
  className = "",
  variant = "appear",
  delay = 0,
  duration = 0.5,
  viewportOptions = { once: true, margin: "0px", threshold: 0.1 }
}: AppearProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = React.useRef(false);

  const once = viewportOptions?.once ?? true;
  const margin = viewportOptions?.margin ?? "0px";
  const threshold = viewportOptions?.threshold ?? 0.1;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chosen = VARIANTS[variant] || VARIANTS.appear;
    if (once && hasAnimatedRef.current) return;

    gsap.set(el, { ...(chosen.hidden as object), willChange: "transform,opacity" });

    const animateIn = () => {
      if (once && hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      gsap.to(el, {
        ...(chosen.visible as object),
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
            gsap.set(el, { ...(chosen.hidden as object) });
          }
        }
      },
      { root: null, rootMargin: margin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, once, margin, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

