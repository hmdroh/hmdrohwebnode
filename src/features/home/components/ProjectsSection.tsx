import React from "react";
import { LayoutGrid, List } from "lucide-react";

import { projects } from "../data/homeData";
import { SectionBlock } from "./SectionBlock";
import { ProjectCard, Project } from "./ProjectCard";
import { Model } from "../../../shared/components/Model/Model";
import { ProjectDetails } from "../projects/ProjectDetails";

type View = "grid" | "list";

export function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null);
  const [view, setView] = React.useState<View>("grid");

  const selectedProject: Project | null = selectedProjectId
    ? ((projects as Project[]).find((p) => p.id === selectedProjectId) ?? null)
    : null;

  return (
    <SectionBlock
      title="Projects"
      iconClassName="fas fa-project-diagram"
      actions={
        <div className="sectionToggleGroup" aria-label="Project view toggle">
          <button
            type="button"
            className={`sectionToggleBtn ${view === "grid" ? "isActive" : ""}`}
            onClick={() => setView("grid")}
            aria-pressed={view === "grid"}
            title="Grid view"
          >
            <LayoutGrid size={18} />
          </button>
          <button
            type="button"
            className={`sectionToggleBtn ${view === "list" ? "isActive" : ""}`}
            onClick={() => setView("list")}
            aria-pressed={view === "list"}
            title="List view"
          >
            <List size={18} />
          </button>
        </div>
      }
    >
      <div className={`projectGrid ${view === "list" ? "projectGridList" : ""}`}>
        {(projects as Project[]).map((project) => (
          <ProjectCard key={project.id} project={project} onOpenDetails={() => setSelectedProjectId(project.id)} />
        ))}
      </div>

      <Model open={Boolean(selectedProject)} title={selectedProject?.title || ""} onClose={() => setSelectedProjectId(null)}>
        {selectedProject ? (
          <div>
            <ProjectDetails project={selectedProject} />
            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              {selectedProject.externalUrl &&
              selectedProject.archived !== true &&
              (selectedProject.live === true || selectedProject.forceDetailsOpen === true) ? (
                <a
                  href={selectedProject.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 12px",
                    borderRadius: 12,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.08)",
                    color: "inherit",
                    fontWeight: 700
                  }}
                >
                  Open website
                </a>
              ) : null}
              {selectedProject.repoUrl ? (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 12px",
                    borderRadius: 12,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(0,0,0,0.25)",
                    color: "inherit",
                    fontWeight: 700
                  }}
                >
                  View repo
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Model>
    </SectionBlock>
  );
}

