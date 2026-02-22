import React from "react";

import { SectionBlock } from "./SectionBlock";
import { externalLinks } from "../data/homeData";

export function ContactsSection() {
  return (
    <SectionBlock title="Contacts" iconClassName="far fa-address-card">
      <div className="contact-link">
        <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" /> {externalLinks.linkedin}
        </a>
      </div>
      <br />
      <div className="contact-link">
        <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" /> {externalLinks.github}
        </a>
      </div>
      <br />
      <br />
      <div className="contact-link-container">
        <div className="contact-link">Built with React.js, TypeScript, Tailwind CSS, GSAP</div>
        <div className="contact-link">California, 2026</div>
      </div>
    </SectionBlock>
  );
}

