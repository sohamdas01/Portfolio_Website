export interface Project {
  title: string;
  tech: string[];
  description: string;
  liveDemo: string;
  github: string;
  video: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  coursework: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  huggingface: string;
  location: string;
  summary: string;
}

export const personalInfo: PersonalInfo = {
  name: "Soham Das",
  title: "Full-Stack & GenAI Developer",
  email: "sohamdas.dev@gmail.com",
  phone: "+91-9832240530",
  linkedin: "https://www.linkedin.com/in/soham-das-5a813528a/",
  github: "https://github.com/sohamdas01",
  leetcode: "https://leetcode.com/u/qZGtk6jsXe/",
  huggingface: "https://huggingface.co/sohamdas01",
  location: "Kolkata, India",
  summary: "Full-Stack & GenAI Developer with hands-on experience building AI-powered applications using RAG, LangChain, and vector databases. Shipped multiple production projects spanning real-time booking systems, document intelligence platforms, AI-powered healthcare solutions, and AI-driven UI generation tools. Seeking full-stack or AI-focused internship opportunities to contribute to impactful, production-ready systems.",
};

export const education: Education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "ST. THOMAS' COLLEGE OF ENGINEERING & TECHNOLOGY, Kolkata, India",
  cgpa: "8.20/10 (till 5th Semester)",
  period: "Aug 2023 – Present",
  coursework: ["Data Structures & Algorithms", "DBMS", "OOP"],
};

export const skillsData: SkillCategory[] = [
  {
    category: "GenAI & LLM Engineering",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "Graph Databases",
      "Fine-tuning",
      "Agentic AI workflows",
      "Agent SDK",
      "MCP",
      "Prompt Engineering"
    ]
  },
  {
    category: "Frontend & Web",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Redux"
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Drizzle ORM"
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase"
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker"
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "NuroDesk – AI-Powered Document Intelligence",
    tech: ["RAG","OCR","React", "Node.js", "OpenAI", "LangChain", "Qdrant Vector DB"],
    description: "A production RAG platform supporting 5 document formats (PDF/OCR, CSV, TXT, web, YouTube) with 3,000+ vector embeddings, 15-chunk retrieval, and per-user document isolation. Integrated OpenAI GPT-4 API, Whisper transcription, and ada-002 embeddings with Qdrant vector DB achieving sub-2 second query latency.",
    liveDemo: "https://nurodesk.vercel.app",
    github: "https://github.com/sohamdas01/NuroDesk",
    video: "https://www.loom.com/share/4e69b1341efa4afdb92c9026489eb851",
  },
  {
    title: "FastCare – AI-Powered Healthcare Platform",
    tech: ["Next.js", "Node.js", "Python","NLP Pipeline", "LangChain", "MongoDB"],
    description: "An end-to-end healthcare platform enabling patients to upload prescriptions, lab reports, and discharge summaries with role-based dashboards for patients and doctors. Integrated LLM in NLP pipeline to extract structured clinical entities and built an automated contradiction engine detecting drug-allergy conflicts and a chronological medical timeline.",
    liveDemo: "https://codeflow-2026-neural-nexus-fast-car-sand.vercel.app",
    github: "https://github.com/sohamdas01/FastCare",
    video: "https://www.loom.com/share/3871b793e4e04dddaf23625832f49ec1",
  },
  {
    title: "FluxUI – AI-Powered UI Generation Platform",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL (NeonDB)", "Drizzle ORM", "Clerk", "Stripe"],
    description: "An AI-powered platform that converts natural language prompts into multi-screen responsive interfaces with live rendering and editable layouts. Integrated OpenAI GPT models for AI-driven screen generation and structured layout creation. Built an interactive canvas engine with zoom/pan controls, draggable-resizable screen frames, and live iframe previews. Implemented authentication and premium feature gating with Stripe subscription payments via Clerk.",
    liveDemo: "https://flux-ui-pink.vercel.app",
    github: "https://github.com/sohamdas01/FluxUI",
    video: "https://www.loom.com/share/8472ba8f90f241e5892b3397589957e1",
  },
  {
    title: "CineTopia – Full-Stack Movie Booking System",
    tech: ["React", "Node.js", "MongoDB","Clerk","Stripe"," Inngest"],
    description: "A MERN-based booking platform managing 80 seats per show across 10+ movies with real-time seat synchronization and concurrency-safe locking. Automated 6 critical workflows via Inngest including seat release timeouts, Stripe payment webhooks, and booking cleanup. Built a 4-module admin system with analytics dashboard and role-based authentication via Clerk.",
    liveDemo: "https://cinetopia.vercel.app",
    github: "https://github.com/sohamdas01/CineTopia",
    video: "https://www.loom.com/share/38d7b222539446bab3b5a51f492a42be",
  },
  {
    title: "NeoBlog – AI Powered Blog Platform",
    tech: ["React", "Node.js", "Express", "MongoDB","Firebase", "Google Gemini API"],
    description: "A full-stack blogging platform with JWT and Firebase authentication across 3 user roles with role-based access control. Integrated Google Gemini AI for automated blog generation with 5+ configurable parameters. Architected 10+ RESTful APIs with MongoDB aggregation pipelines achieving under 200ms response time.",
    liveDemo: "https://neoblog-1.onrender.com",
    github: "https://github.com/sohamdas01/NeoBlog",
    video: "https://www.loom.com/share/b923189d8c3649b19ae5dc3753fba56c",
  }
];
