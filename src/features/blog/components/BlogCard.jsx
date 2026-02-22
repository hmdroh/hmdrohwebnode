import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function BlogCard({ to, title, description, date, readTime, icon, imageSrc }) {
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

BlogCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  icon: PropTypes.node,
  imageSrc: PropTypes.string
};

