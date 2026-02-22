import { gsap, Elastic } from "gsap";

const duration = 0.5;

export default {
  show(target, cb) {
    return gsap.from(target, {
      duration,
      opacity: 0,
      height: 0,
      ease: Elastic.easeOut.config(0.25, 1),
      onComplete() {
        cb();
      }
    });
  },
  hide(target, cb) {
    return gsap.to(target, {
      duration,
      opacity: 0,
      height: 0,
      ease: Elastic.easeIn.config(0.25, 1),
      onComplete() {
        cb();
      }
    });
  }
};

