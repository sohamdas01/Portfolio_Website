import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def build_pdf():
    # PDF Setup
    pdf_path = os.path.abspath("public/Soham_Das_Resume.pdf")
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    
    # 0.4 inch (28.8pt) margins to ensure everything fits on 1 page
    margin = 28.8
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles matching the exact styling
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=26,
        alignment=1, # Centered
        textColor=colors.HexColor('#000000'),
        spaceAfter=3
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=14,
        alignment=1,
        textColor=colors.HexColor('#222222'),
        spaceAfter=4
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        alignment=1,
        textColor=colors.HexColor('#111111'),
        spaceAfter=10
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.HexColor('#000000'),
        spaceBefore=6,
        spaceAfter=2,
        textTransform='uppercase'
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#111111'),
        spaceAfter=4
    )
    
    skills_style = ParagraphStyle(
        'SkillsText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor('#111111'),
        spaceAfter=2.5
    )
    
    project_title_style = ParagraphStyle(
        'ProjTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=colors.HexColor('#000000')
    )
    
    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.2,
        textColor=colors.HexColor('#222222'),
        leftIndent=12,
        firstLineIndent=-12,
        spaceAfter=2.5
    )

    story = []
    
    # 1. Header Section
    story.append(Paragraph("Soham Das", title_style))
    story.append(Paragraph("Full-Stack & GenAI Developer | AI Engineer", subtitle_style))
    
    # Contact Details
    contact_text = (
        "+91-9832240530  |  "
        "<a href='mailto:sohamdas.dev@gmail.com'>sohamdas.dev@gmail.com</a>  |  "
        "<a href='https://www.linkedin.com/in/soham-das-5a813528a/'>linkedin.com/in/soham-das</a>  |  "
        "<a href='https://github.com/sohamdas01'>github.com/sohamdas01</a>  |  "
        "<a href='https://huggingface.co/sohamdas01'>huggingface.co/sohamdas01</a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    
    # Helper function to append section header with divider line
    def add_section_header(title):
        story.append(Paragraph(title, section_title_style))
        story.append(HRFlowable(
            width="100%", 
            thickness=0.5, 
            color=colors.HexColor("#666666"), 
            spaceAfter=4, 
            spaceBefore=1
        ))
        
    # 2. Summary
    add_section_header("Summary")
    summary_text = (
        "GenAI & Full-Stack Developer with hands-on experience designing and deploying AI-powered applications using "
        "<b>Python, RAG pipelines, LangChain, and OpenAI APIs</b>. Shipped 3 production projects spanning "
        "document intelligence, AI-powered healthcare, and real-time systems. Passionate about researching emerging "
        "AI/ML trends, building intelligent agents, and collaborating cross-functionally to deliver impactful, "
        "production-ready solutions."
    )
    story.append(Paragraph(summary_text, body_style))
    
    # 3. Skills
    add_section_header("Skills")
    skills_content = [
        "<b>GenAI & LLM Engineering:</b> Python, RAG, LangChain, LangGraph, Prompt Engineering, Fine-tuning, Agent SDK, MCP, Agentic Workflow, Vector Databases, Graph Databases",
        "<b>AI/ML Concepts:</b> NLP, Entity Extraction, Embedding Models, Retrieval-Augmented Generation, AI Pipeline Design, Model Evaluation, Algorithm Testing",
        "<b>Frontend & Web Development:</b> React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Redux, Bootstrap",
        "<b>Backend & APIs:</b> Node.js, Express.js, REST APIs, GraphQL, Drizzle ORM",
        "<b>Databases & Cloud:</b> MongoDB, PostgreSQL, MySQL, Firebase, MongoDB Atlas, Qdrant Cloud",
        "<b>Tools & DevOps:</b> Git, GitHub, Docker, Postman, VS Code, Vercel, Render"
    ]
    for skill in skills_content:
        story.append(Paragraph(skill, skills_style))
        
    # 4. Projects
    add_section_header("Projects")
    
    # Helper to add project header row
    def add_project_header(title, tech, demo_url, github_url, video_url):
        title_para = Paragraph(f"<b>{title}</b> | <i>{tech}</i>", project_title_style)
        links_para = Paragraph(
            f"<font color='#0066cc'><u><a href='{demo_url}'>Live Demo</a></u></font> | "
            f"<font color='#0066cc'><u><a href='{github_url}'>GitHub</a></u></font> | "
            f"<font color='#0066cc'><u><a href='{video_url}'>Video</a></u></font>",
            ParagraphStyle('ProjLinks', parent=project_title_style, alignment=2) # Right align
        )
        t = Table([[title_para, links_para]], colWidths=[400, 156])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
        ]))
        story.append(t)

    # Project 1: NuroDesk
    add_project_header(
        "NuroDesk &ndash; AI-Powered Document Intelligence",
        "LangChain, RAG, Qdrant, React, Node.js",
        "https://nurodesk.vercel.app",
        "https://github.com/sohamdas01/NuroDesk",
        "https://www.loom.com/share/4e69b1341efa4afdb92c9026489eb851"
    )
    story.append(Paragraph("&ndash; Architected a production <b>RAG platform</b> supporting <b>5 document formats</b> (PDF/OCR, CSV, TXT, web, YouTube) with <b>3,000+ vector embeddings</b>, 15-chunk retrieval, and per-user document isolation &mdash; a full AI solution built from design to deployment.", bullet_style))
    story.append(Paragraph("&ndash; Integrated <b>OpenAI GPT-4</b>, Whisper transcription, and <b>ada-002 embeddings</b> (1536-dim) with <b>Qdrant</b> vector DB; <b>tested and optimized</b> AI query latency to under 2s with 3&ndash;5 source citations per response.", bullet_style))
    story.append(Paragraph("&ndash; Engineered scalable <b>Python-based AI ingestion pipelines</b> with <b>LangChain</b> (1,000-token chunks, 200 overlap), <b>Tesseract OCR</b>, and <b>yt-dlp</b> &mdash; validated and stress-tested across <b>500+ documents</b>.", bullet_style))
    story.append(Paragraph("&ndash; Deployed on <b>Vercel</b> and <b>Render</b> with <b>MongoDB Atlas</b> and <b>Qdrant Cloud</b>; actively monitoring AI model behaviour and pipeline performance in a live multi-user production environment.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 2: FastCare
    add_project_header(
        "FastCare &ndash; AI-Powered Healthcare Platform",
        "Python, NLP Pipeline, Next.js, Node.js",
        "https://codeflow-2026-neural-nexus-fast-car-sand.vercel.app",
        "https://github.com/sohamdas01/FastCare",
        "https://www.loom.com/share/3871b793e4e04dddaf23625832f49ec1"
    )
    story.append(Paragraph("&ndash; Developed an end-to-end <b>AI healthcare solution</b> integrating <b>OpenAI GPT-4o</b> into a <b>Python NLP pipeline</b> to extract structured clinical entities &mdash; medications, lab values, allergies &mdash; from unstructured patient documents.", bullet_style))
    story.append(Paragraph("&ndash; Built an <b>automated AI contradiction engine</b> detecting drug-allergy conflicts and abnormal lab values &mdash; an intelligent validation layer that tests AI accuracy and surfaces critical health flags to clinicians instantly.", bullet_style))
    story.append(Paragraph("&ndash; Engineered the full-stack system (<b>Next.js</b> frontend, <b>Node.js</b> API, <b>MongoDB</b> schema) with Cloudinary storage and <b>NextAuth</b> authentication; collaborated as lead developer in a <b>cross-functional team</b> to ship a production AI product.", bullet_style))
    story.append(Paragraph("&ndash; Researched and implemented a <b>chronological medical timeline</b> feature surfacing AI-generated clinical summaries per patient &mdash; demonstrating applied research turning emerging AI capabilities into real-world tools.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3: FluxUI
    add_project_header(
        "FluxUI &ndash; AI-Powered UI Generation Platform",
        "OpenAI, Next.js, NeonDB, Drizzle ORM",
        "https://flux-ui-pink.vercel.app",
        "https://github.com/sohamdas01/FluxUI",
        "https://www.loom.com/share/8472ba8f90f241e5892b3397589957e1"
    )
    story.append(Paragraph("&ndash; Built a production-grade <b>AI solution</b> that converts natural language prompts into <b>multi-screen responsive UI layouts</b> using <b>OpenAI GPT models</b> &mdash; a direct application of AI for design automation and code generation.", bullet_style))
    story.append(Paragraph("&ndash; Designed and tested <b>AI-driven workflows</b> for screen generation, UI editing, structured layout creation, and theme-aware responsive design &mdash; validating model outputs against edge cases and visual accuracy benchmarks.", bullet_style))
    story.append(Paragraph("&ndash; Implemented <b>authentication, premium feature gating, and Stripe subscription payments</b> via <b>Clerk</b> &mdash; researched and integrated third-party AI and payment APIs to deliver a monetized, full-stack AI product.", bullet_style))
    
    # 5. Education
    add_section_header("Education")
    
    college_para = Paragraph("<b>ST. THOMAS&rsquo; COLLEGE OF ENGINEERING &amp; TECHNOLOGY</b>", ParagraphStyle('CollName', parent=project_title_style, fontSize=9.5))
    loc_para = Paragraph("Kolkata, India", ParagraphStyle('CollLoc', parent=project_title_style, alignment=2, fontSize=9.5))
    
    degree_para = Paragraph("<i>B.Tech in Computer Science and Engineering</i> | CGPA: <b>8.20/10</b> (till 5th Semester)", ParagraphStyle('DegName', parent=body_style, spaceAfter=0))
    period_para = Paragraph("Aug 2023 &ndash; Present", ParagraphStyle('DegPer', parent=body_style, alignment=2, spaceAfter=0))
    
    t_edu_1 = Table([[college_para, loc_para]], colWidths=[400, 156])
    t_edu_1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    
    t_edu_2 = Table([[degree_para, period_para]], colWidths=[420, 136])
    t_edu_2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    
    story.append(t_edu_1)
    story.append(t_edu_2)

    # Build Doc
    doc.build(story)
    print("Resume PDF successfully compiled and saved to public/Soham_Das_Resume.pdf")

if __name__ == "__main__":
    build_pdf()
