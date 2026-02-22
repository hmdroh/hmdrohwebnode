import React from "react";
import { BookOpen, Code, Cpu, Database, Layers, Server, Wrench } from "lucide-react";

import { posts } from "../data/posts";
import { BlogCard } from "../components/BlogCard";

import "../styles/blog.css";

function getTopicIcon(topic) {
  switch ((topic || "").toLowerCase()) {
    case "frontend":
      return <Layers size={18} />;
    case "backend":
      return <Server size={18} />;
    case "database":
      return <Database size={18} />;
    case "devops":
      return <Cpu size={18} />;
    case "tools":
      return <Wrench size={18} />;
    case "architecture":
      return <Code size={18} />;
    default:
      return <BookOpen size={18} />;
  }
}

export function BlogIndexPage() {
  const sorted = React.useMemo(() => {
    return [...posts].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }, []);

  const count = sorted.length;
  return (
    <div className="blogPage">
      <header className="blogHero">
        <div className="blogHeroInner">
          <div className="blogHeroTitleRow">
            <h1 className="blogHeroTitle">Engineering Blog</h1>
            <div className="blogHeroCount">
              {count} {count === 1 ? "post" : "posts"}
            </div>
          </div>
          <p className="blogHeroSubtitle">
            Technical insights, architecture notes, and practical tooling write-ups.
          </p>
        </div>
      </header>

      <main className="blogMain">
        <div className="blogGrid">
          {sorted.map((post) => (
            <BlogCard
              key={post.slug}
              to={`/blog/${post.slug}`}
              title={post.title}
              description={post.summary}
              date={post.dateLabel || post.date}
              readTime={post.readTime || "—"}
              icon={getTopicIcon(post.topic)}
              imageSrc={
                post.imagePath ? `${process.env.PUBLIC_URL || ""}${post.imagePath}` : undefined
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}

