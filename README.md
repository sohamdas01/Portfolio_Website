# Soham Das -My Portfolio Website

# 👋 About Me

I’m **Soham Das**, a **Full‑Stack & GenAI Developer | AI Engineer**
I build **production‑ready AI applications** that combine modern web development with advanced Generative AI workflows.  
My focus is on creating **scalable, visually polished systems** that solve real‑world problems.

---

## 🔑 Skills

### 🧠 GenAI & LLM Engineering
- **Python**, **RAG pipelines**, **LangChain**, **LangGraph**  
- **Prompt Engineering**, **Fine‑tuning**, **Agent SDK**, **MCP**  
- **Agentic Workflows**, **Vector Databases**, **Graph Databases**


### 🎨 Frontend & Web Development
- **React.js**, **Next.js**, **TypeScript**, **JavaScript (ES6+)**  
- **Tailwind CSS**, **HTML5**, **CSS3**, **Redux**, **Bootstrap**

### ⚙️ Backend & APIs
- **Node.js**, **Express.js**  
- **REST APIs**, **GraphQL**, **Drizzle ORM**

### 🗄️ Databases & Cloud
- **MongoDB**, **PostgreSQL**, **MySQL**, **Firebase**  
- **MongoDB Atlas**, **Qdrant Cloud**

### 🛠️ Tools & DevOps
- **Git**, **GitHub**, **Docker**, **Postman**, **VS Code**  
- **Vercel**, **Render**

---

## 🎯 What Drives Me
- Designing **agentic AI workflows** that go beyond prompt engineering  
- Building **scalable full‑stack platforms** with modern UI/UX  
- Optimizing **cloud infrastructure** for low latency and reliability  
- Delivering **impactful, production‑ready systems**
---

* 📧 **Email**: [sohamdas.dev@gmail.com](mailto:sohamdas.dev@gmail.com)
* 📞 **Phone**: +91-9832240530
* 💼 **LinkedIn**: [linkedin.com/in/soham-das](https://www.linkedin.com/in/soham-das-5a813528a/)
* 🐙 **GitHub**: [github.com/sohamdas01](https://github.com/sohamdas01)
* 🤗 **Hugging Face**: [huggingface.co/sohamdas01](https://huggingface.co/sohamdas01)
* 💡 **LeetCode**: [leetcode.com/u/qZGtk6jsXe/](https://leetcode.com/u/qZGtk6jsXe/)

---

## Technologies Used

* **Core Framework**: [Next.js 14](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **PDF Compilation (Resume)**: [ReportLab](https://www.reportlab.com/) (Python)

---

## File Structure

```
📂 public/
   ├── 📄 avatar.jpg                # Enclosed profile photo avatar
   └── 📄 Soham_Das_Resume.pdf      # Hand-crafted 1-page PDF compiled from reportlab
📂 scripts/
   └── 📄 generate_resume.py        # Python script that generates the PDF resume
📂 src/
   ├── 📂 app/
   │   ├── 📄 globals.css            # Custom scrollbars, animations, and radial glows
   │   ├── 📄 layout.tsx             # Main HTML shell structure & SEO meta tags
   │   └── 📄 page.tsx               # Main assembly page importing all sections
   ├── 📂 components/
   │   ├── 📄 About.tsx              # Bio summary and Education card with tag badges
   │   ├── 📄 Contact.tsx            # Form validation, contact details, and success toast
   │   ├── 📄 FadeIn.tsx             # Scroll reveal wrapper using IntersectionObserver
   │   ├── 📄 Footer.tsx             # Copyright and tech credits
   │   ├── 📄 Hero.tsx               # Typing effect animation, CTAs, and custom social icons
   │   ├── 📄 Navbar.tsx             # Sticky responsive navigation + avatar & resume download
   │   ├── 📄 Projects.tsx           # Grid showcasing the 5 projects and their respective links
   │   └── 📄 Skills.tsx             # Categorized skills grid with hover/glow states
   └── 📂 lib/
       └── 📄 data.ts                # TypeScript interface types and the static data definitions
```

---

## How It Works

### 1. High-Fidelity Resume Generation
The resume downloaded by users is dynamically compiled using a custom Python script located in `scripts/generate_resume.py`. It uses the `reportlab` library to draw a precise, 1-page resume PDF that matches the text content and style of Soham's official resume. It includes clickable links and structured tables.

### 2. Space-Glow Mesh Background
The deep visual aesthetic is created in `globals.css` by overlaying a repeating `48px` tactile grid with four subtle radial gradients (Deep Blue at the top, Light Blue on the right, Light Violet on the left, and Sky Blue on the bottom right) set with fixed coordinates. Removing solid backgrounds from the Next.js page components allows these rich glows to blend as the user scrolls.

### 3. Client-Side Interactions & Redirections
- **Typing Animation**: Built in `Hero.tsx` using native React hooks to cycle through developer roles with cursor blinking animations.
- **Scroll Reveals**: `FadeIn.tsx` monitors viewport boundaries using the `IntersectionObserver` API, applying transition classes when elements enter the screen.
- **Contact Redirection**: When the form is submitted, the application validates the inputs, constructs a pre-filled `mailto:` link, redirects the browser to open the user's local email client with the draft pre-populated, and fires a confirmation toast.
