export const skills = [
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "React Native",
  "React Router",
  "React Query",
  "React Hook Form",
  "React Testing Library",
  "AWS S3",
  "AWS Lambda",
  "AWS EC2",
  "AWS RDS",
  "AWS CloudFront",
  "AWS Route 53",
  "AWS IAM",
  "AWS SES",
  "AWS SNS",
  "Jenkins",
  "MCP",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Figma",
  "PHP",
  "ES6",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "Node.js",
  "React.js",
  "Redux.js",
  "Python",
  "jQuery",
  "Bootstrap",
  "SASS",
  "D3",
  "JSON APIs and Ajax",
  "RESTful API",
  "GraphQL",
  "MySQL",
  "SQL",
  "MongoDB",
  "Mongoose.js",
  "Express.js",
  "Sequelize.js",
  "Git/Github Version Controlling",
  "UX Design",
  "JSX",
  "Photoshop",
  "Illustrator",
  "MERN Stack",
  "Jest Testing Framework",
  "Helmet.js",
  "AWS EC2 Management",
  "Linux Shell and SSH Commands",
  "Microsoft Office",
  "A+ Hardware",
  "Project Management Skills",
  "Algorithms",
  "Responsive Design"
];

export const projects = [
  {
    id: "iclasser",
    title: "iClasser (iclasser.com)",
    year: "2022",
    category: "EdTech",
    externalUrl: "https://iclasser.com",
    live: true,
    archived: false,
    summary: "Learning platform built with a modern full-stack architecture and scalable infra.",
    highlights: [
      "Next.js + TypeScript codebase",
      "MongoDB-backed data model",
      "AWS deployment and operational tooling"
    ],
    tech: ["Monorepo", "Next.js", "TypeScript", "MongoDB", "AWS"]
  },
  {
    id: "inkdes",
    title: "Inkdes (inkdes.com)",
    year: "2025",
    category: "SaaS",
    externalUrl: "https://inkdes.com",
    live: true,
    archived: false,
    summary:
      "Product site and app foundation with reusable UI/email components for fast iteration.",
    highlights: [
      "Monorepo-style shared packages",
      "Next.js + TypeScript app foundation",
      "Reusable email components package"
    ],
    tech: [
      "Monorepo",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS",
      "@inkdes-email/components"
    ]
  },
  {
    id: "@inkdes-email/components",
    title: "@inkdes-email/components (NPM package)",
    year: "2025",
    category: "NPM package",
    repoUrl: "https://www.npmjs.com/package/@inkdes-email/components",
    live: true,
    archived: false,
    forceDetailsOpen: true,
    summary:
      "NPM package for reusable email components for Inkdes.",
    tech: ["TypeScript", "NPM package", "Email components", "React"]
  },
  {
    id: "afghan-school-7",
    title: "Afghan School 7 (iOS)",
    year: "2024",
    category: "Mobile app",
    externalUrl: "https://apps.apple.com/us/app/afghan-school-7/id6740042267",
    live: true,
    archived: false,
    summary:
      "Mobile learning app built with Expo React Native and the iClasser Learning API, featuring right-to-left grade 7 subjects.",
    highlights: [
      "Expo + React Native app for iPhone/iPad",
      "RTL subject support (grade 7 curriculum)",
      "Progress tracking powered by iClasser Learning API"
    ],
    tech: ["Expo", "React Native", "iClasser Learning API", "RTL", "iOS", "iPad"]
  },
  {
    id: "postmaker-dev",
    title: "Postmaker.dev",
    year: "2026",
    category: "Helper web tool",
    repoUrl: "https://github.com/iClasser/postmaker.dev",
    live: false,
    archived: false,
    forceDetailsOpen: true,
    summary:
      "Open-source helper web tool for generating designs, postcards, images, and more (repo only, no live demo).",
    highlights: [
      "Open-source project on GitHub",
      "Monorepo setup for scalable development",
      "Tooling-focused UI for fast content generation"
    ],
    tech: ["TypeScript", "Monorepo", "pnpm", "Turborepo", "Web app"]
  },
  {
    id: "3s-appointments",
    title: "3S Appointments",
    year: "2023",
    category: "Web app",
    externalUrl: "https://app.iclasser.com/b2b/softwares/appointment-booker",
    live: true,
    archived: false,
    forceDetailsOpen: true,
    summary:
      "Appointment booking system built with React.js and Node.js, featuring a modern UI and backend services.",
    highlights: [
      "React.js + Node.js app for appointment booking",
      "Modern UI and backend services"
    ],
    tech: ["React.js", "Node.js", "Modern UI", "Backend services", "PostgreSQL", "Sequelize.js"]
  },
  {
    id: "allpresale",
    title: "AllPresale (allpresale.org)",
    year: "2021",
    category: "Crypto analytics",
    externalUrl: "https://allpresale.org",
    live: false,
    archived: true,
    summary:
      "Crypto information website with charts, wallet connect, and USD pricing—similar to CoinMarketCap.",
    highlights: [
      "Wallet connect + token holdings view",
      "Live coin prices in USD and charting UI",
      "Archived project (demo/details only)"
    ],
    tech: ["Web3", "Wallet Connect", "Charts", "APIs", "JavaScript", "React.js"]
  },
  {
    id: "farsales",
    title: "Farsales.com Online Store (2016)",
    year: "2016",
    category: "E-commerce",
    externalUrl: "http://farsales.com",
    live: false,
    archived: true,
    summary:
      "Online store built on Magento with custom UI/UX and integrations (archived).",
    highlights: [
      "Magento customization",
      "UI/UX design",
      "Payments + catalog management",
      "Archived project (details only)"
    ],
    tech: ["HTML", "CSS", "PHP", "MySQL", "Magento", "Illustrator", "JavaScript"]
  },
  {
    id: "malomat",
    title: "Malomat HR MIS System (2011)",
    year: "2011",
    category: "MIS",
    externalUrl: "http://malomat.wysoon.com",
    live: false,
    archived: true,
    summary:
      "HR/MIS system for managing employee records and internal workflows (archived).",
    highlights: [
      "CRUD workflows",
      "Role-based access patterns",
      "Reporting + data integrity",
      "Archived project (details only)"
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery", "PHP gd library"]
  },
  {
    id: "weekend-wonderer",
    title: "Weekend Wonderer (2018)",
    year: "2018",
    category: "Web app",
    externalUrl: "https://wwapp.herokuapp.com/",
    live: false,
    archived: true,
    summary: "Discover weekend activities with search, filters, and fast UI.",
    highlights: ["API integration", "Search + filtering UX", "Responsive UI"],
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "React.js",
      "RESTful API",
      "JSON",
      "Snapchat Video"
    ]
  },
  {
    id: "live-active",
    title: "Live Active Healthy Food (2018)",
    year: "2018",
    category: "Web app",
    externalUrl: "https://liveactive.herokuapp.com/",
    live: false,
    archived: true,
    summary: "Landing + ordering flow concept for healthy food delivery.",
    highlights: ["Express + templating", "Form handling", "Deployment-ready build"],
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "RESTful API",
      "Handlebars.js"
    ]
  },
  {
    id: "nytimes-scrubber",
    title: "NYTimes News Scrubber (2018)",
    year: "2018",
    category: "Web app",
    externalUrl: "https://nytreactproj.herokuapp.com/",
    live: false,
    archived: true,
    summary: "Search and save NYTimes articles with a clean React UI.",
    highlights: ["React UI", "API-driven content", "State management patterns"],
    tech: ["HTML", "CSS", "Bootstrap", "Node.js", "React.js", "RESTful API", "JSON"]
  },
  {
    id: "acbar-scraper",
    title: "Acbar Website Scrapper (2018)",
    year: "2018",
    category: "Scraper",
    externalUrl: "http://www.untoldedu.com/",
    live: false,
    archived: true,
    summary: "Website scraping pipeline with storage and basic reporting.",
    highlights: ["Data extraction", "Persistence layer", "Automation-friendly design"],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "jQuery",
      "Express",
      "Sequelize.js",
      "Moment.js"
    ]
  },
  {
    id: "friend-finder",
    title: "Friend Finder (2018)",
    year: "2018",
    category: "Web app",
    externalUrl: "https://friend-findertest.herokuapp.com/",
    live: false,
    archived: true,
    summary: "Simple matching app concept with forms and results.",
    highlights: ["Form UX", "Basic matching logic", "Simple API patterns"],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "jQuery", "FontAwesome"]
  },
  {
    id: "anatomy-viewer-vb6",
    title: "Anatomy Image Viewer (VB6)",
    year: "2004",
    category: "Desktop app",
    live: false,
    archived: true,
    summary:
      "Offline anatomy image viewer built in Visual Basic 6 for medical students in Afghanistan.",
    highlights: [
      "Fast image browsing and categorized anatomy library",
      "Built for offline use on lab/clinic computers",
      "Sold to many local students in 2004"
    ],
    tech: ["Visual Basic 6", "Desktop app", "Offline", "Medical education"]
  },
  {
    id: "wysoon",
    title: "Wysoon.com Web Hosting Service (2018)",
    year: "2018",
    category: "Website",
    externalUrl: "http://wysoon.com",
    live: false,
    archived: true,
    summary:
      "Web hosting and web development services website with marketing content (archived).",
    highlights: [
      "Responsive pages",
      "Lead capture forms",
      "SEO-friendly structure",
      "Archived project (details only)"
    ],
    tech: ["HTML", "CSS", "Parallax", "Materialize CSS", "JavaScript", "Google Forms"]
  }
];

export const externalLinks = {
  linkedin: "https://linkedin.com/in/hmdroh",
  github: "https://github.com/hmdroh",
  x: "https://x.com/hmdroh"
};

export const skillDescriptions = {
  TypeScript: "Typed JavaScript for safer, scalable front-end and back-end codebases.",
  "Tailwind CSS": "Utility-first CSS for fast, consistent UI styling.",
  "Next.js": "React framework for production apps (routing, SSR, static generation).",
  "React Native": "Build native mobile apps using React and the native platform UI.",
  "React Router": "Client-side routing for React apps; route-based layouts and navigation.",
  "React Query": "Server-state management: caching, background refetching, and mutations.",
  "React Hook Form": "Performant form state management with minimal re-renders.",
  "React Testing Library": "Testing React components by user behavior, not implementation details.",

  React: "Component-based UI development with modern hooks and routing patterns.",
  "React.js": "Component-based UI development with modern hooks and routing patterns.",
  "Redux.js": "Predictable state management for complex UI flows and shared app state.",

  HTML5: "Modern semantic HTML for accessible, well-structured web pages.",
  CSS3: "Responsive layouts, animations, and styling for polished UI experiences.",
  JavaScript: "Core language for interactive web apps, APIs, and tooling.",
  ES6: "Modern JavaScript features like modules, destructuring, and async code.",
  JSX: "JavaScript syntax extension for composing React UI declaratively.",

  Figma: "Design and prototyping tool for UI/UX workflows and design systems.",
  "UX Design": "User-centered design: flows, wireframes, usability, and information architecture.",

  PHP: "Server-side scripting language for web backends and dynamic sites.",
  Python: "General-purpose language for scripting, automation, and backend services.",
  jQuery: "DOM and AJAX utility library for simpler cross-browser interactions.",

  Bootstrap: "Component-first CSS framework for quick, responsive UI layouts.",
  SASS: "CSS preprocessor for variables, nesting, and reusable style patterns.",
  D3: "Data-driven visualizations using SVG/Canvas with fine-grained control.",

  "JSON APIs and Ajax": "HTTP requests to fetch and update data without full page reloads.",
  "RESTful API": "Resource-based API design using HTTP verbs, status codes, and JSON.",
  GraphQL: "Query-based API layer for precise data fetching and strong typing.",

  Supabase: "Backend-as-a-service with Postgres, auth, storage, and real-time APIs.",
  PostgreSQL: "Relational database known for reliability, SQL features, and performance.",
  Firebase: "Google BaaS for auth, hosting, databases, and real-time sync.",

  MySQL: "Widely used relational database for web applications and services.",
  SQL: "Query language for reading, aggregating, and modifying relational data.",
  MongoDB: "Document database for flexible schemas and rapid iteration.",
  "Mongoose.js": "MongoDB object modeling library for schema validation and queries.",
  "Express.js": "Minimal Node.js web framework for APIs, routing, and middleware.",
  "Sequelize.js": "ORM for SQL databases with models, migrations, and query helpers.",

  "Node.js": "JavaScript runtime for APIs, tooling, and backend services.",
  "MERN Stack": "Full-stack approach using MongoDB, Express, React, and Node.js.",
  "Jest Testing Framework":
    "Testing framework for Node.js and JavaScript code.",
  "Helmet.js": "Security middleware that sets sensible HTTP headers in web apps.",

  "AWS S3": "Object storage for static assets, uploads, and backups.",
  "AWS Lambda": "Serverless compute for event-driven workloads and APIs.",
  "AWS EC2": "Virtual servers in the cloud for hosting apps and services.",
  "AWS EC2 Management": "Provisioning, SSH access, scaling, and operations for EC2 instances.",
  "AWS RDS": "Managed relational databases with backups, scaling, and monitoring.",
  "AWS CloudFront": "CDN for caching and fast global delivery of web content.",
  "AWS Route 53": "DNS and traffic routing for domains, records, and health checks.",
  "AWS IAM": "Identity and access management using users, roles, and policies.",
  "AWS SES": "Email sending service for transactional and marketing emails.",
  "AWS SNS": "Pub/sub messaging for notifications and event fan-out.",

  Jenkins: "CI/CD automation server for builds, tests, and deployments.",
  MCP: "Model Context Protocol for connecting tools and data sources to AI workflows.",

  "Git/Github Version Controlling":
    "Source control workflows for collaboration, reviews, and release management.",
  "Linux Shell and SSH Commands":
    "Command-line workflows for servers, scripting, and remote administration.",
  "Microsoft Office": "Productivity suite for documents, spreadsheets, and presentations.",
  "A+ Hardware": "Foundational knowledge of PC hardware, troubleshooting, and maintenance.",
  "Project Management Skills": "Planning, estimation, communication, and delivery across milestones.",
  Algorithms: "Problem-solving patterns and data-structure-driven approaches to coding tasks.",
  "Responsive Design": "Layouts that adapt cleanly across mobile, tablet, and desktop screens."
};

