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
  title: "Full-Stack & GenAI Developer | AI Engineer",
  email: "sohamdas.dev@gmail.com",
  phone: "+91-9832240530",
  linkedin: "https://www.linkedin.com/in/soham-das-5a813528a/",
  github: "https://github.com/sohamdas01",
  leetcode: "https://leetcode.com/u/qZGtk6jsXe/",
  huggingface: "https://huggingface.co/sohamdas01",
  location: "Kolkata, India",
  summary: "GenAI & Full-Stack Developer with hands-on experience designing and deploying AI-powered applications using Python, RAG pipelines, LangChain, and OpenAI APIs. Shipped 3 production projects spanning document intelligence, AI-powered healthcare, and real-time systems. Passionate about researching emerging AI/ML trends, building intelligent agents, and collaborating cross-functionally to deliver impactful, production-ready solutions.",
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
      "Python",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Fine-tuning",
      "Agent SDK",
      "MCP",
      "Agentic Workflow",
      "Vector Databases",
      "Graph Databases"
    ]
  },
  {
    category: "AI/ML Concepts",
    skills: [
      "NLP",
      "Entity Extraction",
      "Embedding Models",
      "Retrieval-Augmented Generation",
      "AI Pipeline Design",
      "Model Evaluation",
      "Algorithm Testing"
    ]
  },
  {
    category: "Frontend & Web Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
      "Bootstrap"
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Drizzle ORM"
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "MongoDB Atlas",
      "Qdrant Cloud"
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Vercel",
      "Render"
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "NuroDesk – AI-Powered Document Intelligence",
    tech: ["LangChain", "RAG", "Vector DB(Qdrant)","OCR","Tesseract.js","yt-dlp-exec", "React","Redux","Node.js","Express", "MongoDB"],
    description: "Architected a production RAG platform supporting 5 document formats (PDF/OCR, CSV, TXT, web, YouTube) with 3,000+ vector embeddings, 15-chunk retrieval, and per-user document isolation — a full AI solution built from design to deployment. Integrated OpenAI GPT-4, Whisper transcription, and ada-002 embeddings (1536-dim) with Qdrant vector DB; tested and optimized AI query latency to under 2s with 3–5 source citations per response. Engineered scalable Python-based AI ingestion pipelines with LangChain (1,000-token chunks, 200 overlap), Tesseract OCR, and yt-dlp — validated and stress-tested across 500+ documents. Deployed on Vercel and Render with MongoDB Atlas and Qdrant Cloud; actively monitoring AI model behaviour and pipeline performance in a live multi-user production environment.",
    liveDemo: "https://nurodesk.vercel.app",
    github: "https://github.com/sohamdas01/NuroDesk",
    video: "https://www.loom.com/share/4e69b1341efa4afdb92c9026489eb851",
  },
  {
    title: "FastCare – AI-Powered Healthcare Platform",
    tech: ["Python", "NLP Pipeline","FastAPI", "pdfplumber","Cloudinary", "Next.js", "Node.js (via Next.js API routes)", "MongoDB"],
    description: "Developed an end-to-end AI healthcare solution integrating OpenAI GPT-4o into a Python NLP pipeline to extract structured clinical entities — medications, lab values, allergies — from unstructured patient documents. Built an automated AI contradiction engine detecting drug-allergy conflicts and abnormal lab values — an intelligent validation layer that tests AI accuracy and surfaces critical health flags to clinicians instantly. Engineered the full-stack system (Next.js frontend, Node.js API, MongoDB schema) with Cloudinary storage and NextAuth authentication; collaborated as lead developer in a cross-functional team to ship a production AI product. Researched and implemented a chronological medical timeline feature surfacing AI-generated clinical summaries per patient — demonstrating applied research turning emerging AI capabilities into real-world tools.",
    liveDemo: "https://codeflow-2026-neural-nexus-fast-car-sand.vercel.app",
    github: "https://github.com/sohamdas01/FastCare",
    video: "https://www.loom.com/share/3871b793e4e04dddaf23625832f49ec1",
  },
  {
    title: "FluxUI – AI-Powered UI Generation Platform",
    tech: ["Next.js","TypeScript"," PostgreSQL (Neon Serverless)", "Drizzle ORM","Clerk Authentication", "Stripe Payments", "OpenAI GPT Models"],
    description: "Built a production-grade AI solution that converts natural language prompts into multi-screen responsive UI layouts using OpenAI GPT models — a direct application of AI for design automation and code generation. Designed and tested AI-driven workflows for screen generation, UI editing, structured layout creation, and theme-aware responsive design — validating model outputs against edge cases and visual accuracy benchmarks. Implemented authentication, premium feature gating, and Stripe subscription payments via Clerk — researched and integrated third-party AI and payment APIs to deliver a monetized, full-stack AI product.",
    liveDemo: "https://flux-ui-pink.vercel.app",
    github: "https://github.com/sohamdas01/FluxUI",
    video: "https://www.loom.com/share/8472ba8f90f241e5892b3397589957e1",
  },
  {
    title: "CineTopia – Full-Stack Movie Booking System",
    tech: ["React","Vite", "Node.js","Express", "MongoDB","Clerk Authentication", "Stripe Payments", "Inngest Workflows", "WebSockets","NodeMailer"],
    description: "A MERN-based booking platform managing 80 seats per show across 10+ movies with real-time seat synchronization and concurrency-safe locking. Automated 6 critical workflows via Inngest including seat release timeouts, Stripe payment webhooks, and booking cleanup. Built a 4-module admin system with analytics dashboard and role-based authentication via Clerk.",
    liveDemo: "https://cinetopia.vercel.app",
    github: "https://github.com/sohamdas01/CineTopia",
    video: "https://www.loom.com/share/38d7b222539446bab3b5a51f492a42be",
  },
  {
    title: "NeoBlog – AI Powered Blog Platform",
    tech: ["React","Vite","Redux","Firebase Authentication", "Node.js", "Express", "MongoDB","Imagekit", "Google Gemini AI"],
    description: "A full-stack blogging platform with JWT and Firebase authentication across 3 user roles with role-based access control. Integrated Google Gemini AI for automated blog generation with 5+ configurable parameters. Architected 10+ RESTful APIs with MongoDB aggregation pipelines achieving under 200ms response time.",
    liveDemo: "https://neoblog-1.onrender.com",
    github: "https://github.com/sohamdas01/NeoBlog",
    video: "https://www.loom.com/share/b923189d8c3649b19ae5dc3753fba56c",
  }
];
