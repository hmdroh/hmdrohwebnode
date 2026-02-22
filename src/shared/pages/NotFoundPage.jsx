import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 16px" }}>
      <h1 style={{ margin: 0 }}>Page not found</h1>
      <p style={{ opacity: 0.8 }}>
        The page you’re looking for doesn’t exist (or was moved).
      </p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

