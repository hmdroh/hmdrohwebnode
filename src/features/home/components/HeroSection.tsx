import React from "react";

import MyName from "../../../shared/animations/MyName";
import Logo from "../../../shared/animations/MyLogo";
import { TimeClock } from "../../../shared/components/TimeClock";

import { externalLinks } from "../data/homeData";

export function HeroSection() {
  const resumeHref = `${process.env.PUBLIC_URL || ""}/Hamed_Rohani_Resume-2026-02.pdf`;

  return (
    <div className="div-pg1">
      <div className="App">
        <Logo />
        <div className="full-name">
          <h2>
            <MyName duration="0.6">Hamed Rohani</MyName>
          </h2>
        </div>
        <div className="line-tg">
          <MyName duration="0.3">
            <hr color="blue" />
          </MyName>
        </div>
        <div className="Occupation-title">
          <MyName duration="0.9">Full Stack Senior Software Engineer</MyName>
        </div>

        <div className="lnk-div">
          <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <MyName duration="1">Linkedin</MyName>
          </a>
        </div>
        <div className="lnk-div">
          <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">
            <MyName duration="1.2">Github Link</MyName>
          </a>
        </div>

        <div className="lnk-div">
          <a href={externalLinks.x} target="_blank" rel="noopener noreferrer">
            <MyName duration="1.4">X Account</MyName>
          </a>
        </div>

        <div>
          <a
            style={{ display: "inline-block", margin: "auto" }}
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="buttonCV">
              <span>Updated Resume</span>
              <svg>
                <polyline className="o1" points="0 0, 100 0, 100 35, 0 35, 0 0" />
                <polyline className="o2" points="0 0, 100 0, 100 35, 0 35, 0 0" />
              </svg>
            </div>
          </a>
        </div>

        <TimeClock />
      </div>
    </div>
  );
}

