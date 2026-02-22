import React from "react";

import MyName from "../../../shared/animations/MyName";

import { skills, skillDescriptions } from "../data/homeData";
import { SectionBlock } from "./SectionBlock";
import { Model } from "../../../shared/components/Model/Model";

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = React.useState(null);

  const description =
    selectedSkill && (skillDescriptions[selectedSkill] || `About ${selectedSkill}.`);

  return (
    <SectionBlock title="Technical Skills" iconClassName="fas fa-graduation-cap">
      {skills.map((skill) => (
        <MyName key={skill} duration="0.84">
          <button
            type="button"
            className="skills-div"
            onClick={() => setSelectedSkill(skill)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedSkill(skill);
              }
            }}
          >
            {skill}
          </button>
        </MyName>
      ))}

      <Model
        open={Boolean(selectedSkill)}
        title={selectedSkill || ""}
        onClose={() => setSelectedSkill(null)}
      >
        <h3 style={{ marginTop: 0 }}>Summary</h3>
        <div>{description}</div>
      </Model>
    </SectionBlock>
  );
}

