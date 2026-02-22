export const posts = [
  {
    slug: "email-development-vs-web-development",
    title: "Email Development vs Regular Web Development",
    date: "2026-02-22",
    dateLabel: "Feb 22, 2026",
    readTime: "4 min read",
    topic: "Frontend",
    imagePath: "/96878a15-604d-4a56-a321-cb9a0df45be3.jpeg",
    summary:
      "Why building HTML emails is a different skill: clients, dark mode, limited CSS, and inconsistent rendering.",
    markdownPath: "/content/blog/email-development-vs-web-development.md"
  },
  {
    slug: "hello-world",
    title: "Engineering Notes: Why this portfolio is route-based",
    date: "2026-02-22",
    dateLabel: "Feb 22, 2026",
    readTime: "5 min read",
    topic: "Architecture",
    summary: "A quick overview of the folder structure, routing, and why it scales.",
    markdownPath: "/content/blog/hello-world.md"
  }
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

