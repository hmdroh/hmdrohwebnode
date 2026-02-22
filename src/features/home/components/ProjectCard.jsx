import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import DefaultIcon from "../../../assets/svg/hmd.svg";

export function ProjectCard({ project, onOpenDetails }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 14, opacity: 0 },
      { duration: 0.35, y: 0, opacity: 1, ease: "power2.out" }
    );
  }, []);

  const isLive =
    Boolean(project.externalUrl) && project.live === true && project.archived !== true;
  const shouldOpenExternally = isLive && project.forceDetailsOpen !== true;
  const iconSrc = project.imagePath
    ? `${process.env.PUBLIC_URL || ""}${project.imagePath}`
    : DefaultIcon;
  const iconIsDefault = !project.imagePath;
  let badgeText = "Details";
  if (project.archived) badgeText = "Archived";
  else if (shouldOpenExternally) badgeText = "Live";

  const content = (
    <>
      <div className="projectCardHeader">
        <div className={`projectCardIcon ${iconIsDefault ? "projectCardIconAnimated" : ""}`}>
          <img src={iconSrc} alt="" />
        </div>

        <div className="projectCardTop">
          <div className="projectCardTitle">{project.title}</div>
          <div className="projectCardMeta">
            {project.year ? <span>{project.year}</span> : null}
            {project.category ? <span>· {project.category}</span> : null}
            {
              <span className={`projectCardBadge ${project.archived ? "projectCardBadgeArchived" : ""}`}>{badgeText}</span>
            }
          </div>
        </div>
      </div>
      {project.summary ? (
        <div className="projectCardSummary">{project.summary}</div>
      ) : null}
      {project.tech?.length ? (
        <div className="projectCardTech">
          {project.tech.slice(0, 8).map((t) => (
            <span key={t} className="projectCardTechPill">
              {t}
            </span>
          ))}
          {project.tech.length > 8 ? (
            <span className="projectCardTechMore">+{project.tech.length - 8}</span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  return (
    <div ref={ref} className="projectCardWrap">
      {shouldOpenExternally ? (
        <a
          className="projectCard"
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <button type="button" className="projectCard" onClick={onOpenDetails}>
          {content}
        </button>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    category: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    externalUrl: PropTypes.string,
    repoUrl: PropTypes.string,
    imagePath: PropTypes.string,
    live: PropTypes.bool,
    archived: PropTypes.bool,
    forceDetailsOpen: PropTypes.bool
  }).isRequired,
  onOpenDetails: PropTypes.func.isRequired
};

