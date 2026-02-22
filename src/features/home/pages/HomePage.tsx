import React from "react";

import "../styles/home.css";

import { HeroSection } from "../components/HeroSection";
import { PuzzleSection } from "../components/PuzzleSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactsSection } from "../components/ContactsSection";
import { Appear } from "../../../shared/animations/Appear";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <Appear variant="appear">
        <PuzzleSection />
      </Appear>
      <Appear variant="appear">
        <SkillsSection />
      </Appear>
      <Appear variant="appear">
        <ProjectsSection />
      </Appear>
      <Appear variant="appear">
        <ContactsSection />
      </Appear>
    </div>
  );
}

