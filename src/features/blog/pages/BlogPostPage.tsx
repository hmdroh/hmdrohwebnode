import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { getPostBySlug } from "../data/posts";

type BlogPostMeta = {
  slug: string;
  title: string;
  date?: string;
  dateLabel?: string;
  readTime?: string;
  markdownPath: string;
  imagePath?: string;
};

type Status = "idle" | "loading" | "loaded" | "error";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = (slug ? (getPostBySlug(slug) as BlogPostMeta | undefined) : undefined) || undefined;

  const [markdown, setMarkdown] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (!post) return;
    let cancelled = false;
    const currentPost = post;

    async function load() {
      setStatus("loading");
      setErrorMessage("");
      try {
        const url = `${process.env.PUBLIC_URL || ""}${currentPost.markdownPath}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load markdown: ${res.status}`);
        const text = await res.text();
        if (!cancelled) {
          setMarkdown(text);
          setStatus("loaded");
        }
      } catch (e: unknown) {
        if (!cancelled) {
          setErrorMessage(e instanceof Error ? e.message : "Unknown error");
          setStatus("error");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
        <h1 style={{ marginTop: 0 }}>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  const coverSrc = post.imagePath ? `${process.env.PUBLIC_URL || ""}${post.imagePath}` : "";

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
      <div style={{ marginBottom: 16 }}>
        <Link to="/blog">← Back</Link>
      </div>

      {coverSrc ? (
        <div
          style={{
            height: 240,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.25)",
            marginBottom: 18
          }}
        >
          <img
            src={coverSrc}
            alt={`${post.title} cover`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      ) : null}

      <h1 style={{ margin: "8px 0 6px 0" }}>{post.title}</h1>
      <div style={{ opacity: 0.7, fontSize: 13, marginBottom: 20 }}>
        {post.dateLabel || post.date}
        {post.readTime ? <span> · {post.readTime}</span> : null}
      </div>

      {status === "loading" ? <div style={{ opacity: 0.8 }}>Loading…</div> : null}
      {status === "error" ? (
        <div style={{ opacity: 0.8 }}>
          Couldn’t load this post ({errorMessage}). Check that the markdown file exists at{" "}
          <code>{post.markdownPath}</code>.
        </div>
      ) : null}
      {status === "loaded" ? (
        <div style={{ lineHeight: 1.65, maxWidth: 900 }}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      ) : null}
    </div>
  );
}

