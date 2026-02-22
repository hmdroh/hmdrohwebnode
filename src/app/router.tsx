import React from "react";
import { createHashRouter } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

import { HomePage } from "../features/home/pages/HomePage";
import { BlogIndexPage } from "../features/blog/pages/BlogIndexPage";
import { BlogPostPage } from "../features/blog/pages/BlogPostPage";
import { NotFoundPage } from "../shared/pages/NotFoundPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "blog", element: <BlogIndexPage /> },
      { path: "blog/:slug", element: <BlogPostPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

