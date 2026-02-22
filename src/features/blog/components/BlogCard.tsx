import React from "react";
import { Link } from "react-router-dom";

export type BlogCardProps = Readonly<{
  to: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}>;

export function BlogCard({ to, title, description, date, readTime, icon, imageSrc }: BlogCardProps) {
  return (
    <article className="blogCard">
      <Link to={to} className="blogCardLink" aria-label={title}>
        {imageSrc ? (
          <div className="blogCardMedia" aria-hidden="true">
            <img className="blogCardImg" src={imageSrc} alt={`${title} cover`} />
          </div>
        ) : null}

        <div className="blogCardMetaRow">
          {icon ? <span className="blogCardIcon">{icon}</span> : null}
          <time className="blogCardMetaText">{date}</time>
          <span className="blogCardMetaDot">•</span>
          <span className="blogCardMetaText">{readTime}</span>
        </div>

        <h2 className="blogCardTitle">{title}</h2>
        <p className="blogCardDesc">{description}</p>
      </Link>
    </article>
  );
}

