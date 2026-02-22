import React from "react";
import { gsap, Elastic } from "gsap";
import PropTypes from "prop-types";
import Img from "../../assets/svg/hmd.svg";

function makeProject() {
  return class Project extends React.Component {
    elRef = React.createRef();

    static propTypes = {
      duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      tech: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string.isRequired,
      children: PropTypes.node
    };

    static defaultProps = {
      tech: []
    };

    state = {
      duration: this.props.duration,
      tech: []
    };
    componentDidMount(callback) {
      this.setState({ tech: this.props.tech });

      const el = this.elRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 100, rotationY: 20, opacity: 0 },
        {
          duration: this.state.duration,
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
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <div className="project-content">
              <div className="project-img">
                <img src={Img} alt="project" />
              </div>
              <div className="project-title">{this.props.children}</div>
              <div className="project-tech">
                {this.state.tech.map((name) => (
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
  };
}

export default makeProject();

