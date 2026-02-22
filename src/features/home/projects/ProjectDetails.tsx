import React from "react";

import type { Project } from "../components/ProjectCard";

function DefaultProjectDetails({ project }: Readonly<{ project: Project }>) {
  return (
    <div>
      {project.archived ? (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.25)",
            marginBottom: 12,
            fontSize: 12,
            opacity: 0.9
          }}
        >
          Archived project — details only
        </div>
      ) : null}
      <div style={{ opacity: 0.85, marginBottom: 10 }}>
        {project.summary || "Project details coming soon."}
      </div>

      {project.highlights?.length ? (
        <>
          <h3 style={{ marginBottom: 8 }}>Highlights</h3>
          <ul style={{ marginTop: 0 }}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </>
      ) : null}

      {project.tech?.length ? (
        <>
          <h3 style={{ marginBottom: 8 }}>Tech</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)"
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function WeekendWondererDetails() {
  return (
    <div>
      <div style={{ opacity: 0.9, marginBottom: 10 }}>
        Weekend Wonderer helps users discover weekend activities based on interests, location,
        and quick filters.
      </div>
      <h3 style={{ marginBottom: 8 }}>What I built</h3>
      <ul style={{ marginTop: 0 }}>
        <li>Search + results UX with client-side filtering.</li>
        <li>API integration patterns and data normalization.</li>
        <li>Responsive UI and deployment-ready build.</li>
      </ul>
    </div>
  );
}

function AllPresaleDetails() {
  return (
    <div>
      <div style={{ opacity: 0.9, marginBottom: 10 }}>
        AllPresale was a crypto information website built to surface coin prices in USD, show
        charts (CoinMarketCap-style), and support wallet connect to view holdings.
      </div>
      <h3 style={{ marginBottom: 8 }}>Key features</h3>
      <ul style={{ marginTop: 0 }}>
        <li>Wallet connect flow to read balances and token metadata.</li>
        <li>Market data pages with USD pricing and chart components.</li>
        <li>Fast UI patterns for searching/browsing coins.</li>
      </ul>
      <div style={{ opacity: 0.8 }}>
        This project is archived, so the portfolio shows the details instead of linking
        externally.
      </div>
    </div>
  );
}

function AfghanSchool7Details() {
  return (
    <div>
      <div style={{ opacity: 0.9, marginBottom: 10 }}>
        Afghan School 7 is a mobile learning app built with Expo React Native and the iClasser
        Learning API, covering grade 7 subjects with right-to-left language support.
      </div>
      <h3 style={{ marginBottom: 8 }}>What it includes</h3>
      <ul style={{ marginTop: 0 }}>
        <li>Grade 7 subject library designed for RTL reading flow.</li>
        <li>Interactive study experience with progress tracking.</li>
        <li>iPhone/iPad-ready UI with performance-focused screens.</li>
      </ul>
      <div style={{ opacity: 0.8 }}>
        Available on the App Store (external link from the project card).
      </div>
    </div>
  );
}

function AnatomyViewerDetails() {
  return (
    <div>
      <div style={{ opacity: 0.9, marginBottom: 10 }}>
        Anatomy Image Viewer was a desktop application built in 2004 with Visual Basic 6 to
        help medical students in Afghanistan browse and study anatomy images offline.
      </div>
      <h3 style={{ marginBottom: 8 }}>What it did</h3>
      <ul style={{ marginTop: 0 }}>
        <li>Organized anatomy images into a simple category/navigation structure.</li>
        <li>Fast viewing workflow designed for low-spec computers of that era.</li>
        <li>Offline-first distribution for classrooms and local study.</li>
      </ul>
      <div style={{ opacity: 0.85 }}>
        It was sold to many students at the time and used as a practical study tool.
      </div>
    </div>
  );
}

export function ProjectDetails({ project }: Readonly<{ project?: Project | null }>) {
  if (!project) return null;

  if (project.id === "afghan-school-7") return <AfghanSchool7Details />;
  if (project.id === "anatomy-viewer-vb6") return <AnatomyViewerDetails />;
  if (project.id === "weekend-wonderer") return <WeekendWondererDetails />;
  if (project.id === "allpresale") return <AllPresaleDetails />;
  return <DefaultProjectDetails project={project} />;
}

