/**
 * =============================================================================
 * SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Edit THIS file to update the entire website.
 * Pages, navigation, SEO, schema, and buttons all read from `site`.
 *
 * Search for REPLACE to personalize:
 * headshot, resume PDF, LinkedIn, GitHub, email, domain, credential URLs,
 * project repo/demo links, and testimonial placeholders.
 * =============================================================================
 */

export type Proficiency = "Core" | "Advanced" | "Proficient" | "Working Knowledge";

export type Skill = {
  name: string;
  level: Proficiency;
  /** One line a recruiter can scan. Optional. */
  note?: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  skills: Skill[];
};

export type Experience = {
  id: string;
  company: string;
  /** Short mark shown until you add a real logo. REPLACE with an image path if you have one. */
  logoText: string;
  location: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  impact: string[];
  technologies: string[];
  details?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  /** When true, the project stays in the file but is not shown on the site. */
  hidden?: boolean;
  year: string;
  imageHint: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  highlights: string[];
  tech: string[];
  architecture: string[];
  /** REPLACE with a public repo URL, or leave undefined. */
  github?: string;
  /** REPLACE with a live demo URL, or leave undefined. */
  live?: string;
  screenshots: { label: string; caption: string }[];
};

export type Certification = {
  name: string;
  provider: string;
  date: string;
  /** REPLACE with the public credential URL. */
  credentialUrl?: string;
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  end: string;
  coursework: string[];
  achievements: string[];
};

export type Achievement = {
  category: "Award" | "Hackathon" | "Speaking" | "Publication" | "Patent" | "Leadership" | "Volunteer";
  title: string;
  detail: string;
  year?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** True until you replace the quote with a real recommendation. */
  placeholder: boolean;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  body: string;
};

export const site = {
  person: {
    firstName: "Stuti",
    lastName: "Shrimal",
    name: "Stuti Shrimal",
    initials: "SS",
    role: "Data Engineer",
    secondaryRole: "Analytics Engineer · AI & Data Products",
    /** Shown under the name. Keep this to one line. */
    level: "Data Engineer · 4+ years",
    location: "United States",
    headshot: "/headshot.jpg",
    phone: "",
    phoneDisplay: "",
    email: "stutids@terpmail.umd.edu",
    availability:
      "Open to Data Engineer, Analytics Engineer, Data Platform Engineer, and AI/Data Engineering roles.",
  },

  headline: "I turn complex data into scalable systems, intelligent analytics, and measurable business impact.",

  valueProposition:
    "Data Engineer with experience building cloud data pipelines, analytics platforms, workforce intelligence solutions, and AI-powered applications using Python, SQL, Spark, Databricks, AWS, PostgreSQL, and modern LLM technologies.",

  heroSupport:
    "I build reliable data systems that transform fragmented information into actionable insights. From enterprise-scale healthcare data pipelines to AI-powered analytics and operational dashboards, my work focuses on making data faster, more accessible, and more valuable to the business.",

  shortBio:
    "Data Engineer with experience building cloud data pipelines, analytics platforms, workforce intelligence solutions, and AI-powered applications using Python, SQL, Spark, Databricks, AWS, PostgreSQL, and modern LLM technologies.",

  about: [
    "I’m a Data Engineer focused on building scalable data platforms and transforming complex datasets into systems that people can actually use.",
    "My experience spans enterprise data engineering, cloud modernization, analytics, workforce intelligence, and AI-powered applications. At Accenture, I worked on large-scale healthcare data platforms supporting more than one million users, modernizing ETL workflows and cloud data architectures across AWS, Informatica, Spark, Databricks, and Redshift.",
    "Today, I work on operational and workforce analytics, where I build pipelines, dashboards, automated reporting systems, and AI-enabled analytics tools using Python, PostgreSQL, SQL, and modern LLM architectures.",
    "What interests me most is the space between data engineering and intelligent data products — building infrastructure that is reliable at scale while making complex information easier for teams to explore, understand, and act on.",
    "I hold a Master’s degree in Information Systems from the University of Maryland and a bachelor’s degree in Information Technology.",
  ],

  philosophy: {
    title: "Engineering data systems people can trust.",
    intro: "Good data engineering isn't just about moving data from one place to another. It means creating systems where:",
    points: [
      { title: "Data is reliable.", body: "Teams know they can trust the numbers." },
      { title: "Pipelines scale.", body: "Growth doesn't turn infrastructure into a bottleneck." },
      { title: "Insights are accessible.", body: "Users shouldn't need to understand the underlying data architecture to answer important questions." },
      { title: "Engineering creates business value.", body: "Technical sophistication matters only when it improves decisions, efficiency, or customer outcomes." },
    ],
  },

  careerFocus: {
    title: "What I’m interested in",
    intro: "I’m particularly interested in engineering teams working on:",
    areas: [
      "Large-scale data platforms",
      "Modern cloud data infrastructure",
      "Distributed data processing",
      "AI-enabled analytics",
      "Analytics engineering",
      "Data products",
      "Data observability",
      "Developer platforms for data",
      "LLM-powered enterprise applications",
    ],
    close:
      "I'm interested in Data Engineer, Analytics Engineer, Data Platform Engineer, and AI/Data Engineering opportunities where I can work on technically challenging systems with meaningful business impact.",
  },

  focusAreas: [
    {
      title: "Data Engineering",
      body: "Building reliable pipelines and data workflows that move, transform, validate, and serve data at scale.",
      tech: ["Python", "SQL", "PySpark", "Spark", "Databricks", "Informatica", "PostgreSQL"],
    },
    {
      title: "Cloud Data Platforms",
      body: "Designing cloud-based data architectures for analytics, reporting, and enterprise data processing.",
      tech: ["AWS", "S3", "Redshift", "Databricks", "Delta Lake"],
    },
    {
      title: "Analytics Engineering",
      body: "Turning operational data into trustworthy metrics, automated reporting, dashboards, and decision-support systems.",
      tech: ["SQL", "Python", "Power BI", "Tableau", "Plotly"],
    },
    {
      title: "AI + Data Products",
      body: "Building AI-assisted analytics applications that make enterprise data easier to search, understand, and analyze.",
      tech: ["LLMs", "RAG", "FastAPI", "Gemini", "GPT", "Vector Search", "Next.js"],
    },
  ],

  /** Credible, defensible metrics only. Do not add revenue unless you can defend the number. */
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "1M+", label: "Users Supported" },
    { value: "50+", label: "Enterprise Interfaces" },
    { value: "~40%", label: "Faster Data Loads" },
    { value: "~60%", label: "Faster Analytics" },
    { value: "25+", label: "Technologies" },
  ],

  links: {
    resume: "/resume/Stuti_Shrimal_Sept2026_Data_Engineer.pdf",
    linkedin: "https://www.linkedin.com/in/stuti-shrimal/",
    github: "https://github.com/stuti-shrimal",
    email: "mailto:stutids@terpmail.umd.edu",
  },

  socials: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/stuti-shrimal/" },
    { id: "github", label: "GitHub", href: "https://github.com/stuti-shrimal" },
    { id: "email", label: "Email", href: "mailto:stutids@terpmail.umd.edu" },
  ],

  /** Header stays short on purpose. Everything else lives in ⌘K. */
  nav: [
    { href: "/#about", label: "About", shortcut: "A" },
    { href: "/#experience", label: "Experience", shortcut: "E" },
    { href: "/#projects", label: "Projects", shortcut: "P" },
    { href: "/#skills", label: "Skills", shortcut: "K" },
  ],

  seo: {
    title: "Stuti Shrimal | Data Engineer & AI Analytics Engineer",
    description:
      "Portfolio of Stuti Shrimal, a Data Engineer specializing in Python, SQL, Spark, Databricks, AWS, analytics engineering, cloud data platforms, and AI-powered data products.",
    ogTitle: "Stuti Shrimal — Data Engineer",
    ogDescription: "Building scalable data platforms, analytics systems, and AI-powered data products.",
    // REPLACE with your production domain (no trailing slash).
    url: "https://stutishrimal.com",
    locale: "en_US",
    keywords: [
      "Stuti Shrimal",
      "Data Engineer",
      "Analytics Engineer",
      "Databricks",
      "Apache Spark",
      "AWS",
      "PostgreSQL",
      "Python",
      "SQL",
      "RAG",
      "AI analytics",
    ],
  },

  /** Shown as a short editorial list — not percentage bars. */
  coreTechnologies: [
    { name: "Python", note: "Production data engineering · APIs · analytics · automation" },
    { name: "SQL", note: "Data modeling · analytics · optimization · ETL" },
    { name: "Apache Spark", note: "Distributed transformations · large-scale processing" },
    { name: "Databricks", note: "Data engineering · Spark workloads · Delta" },
    { name: "AWS", note: "S3 · Redshift · cloud data pipelines" },
  ],

  skills: [
    {
      id: "languages",
      label: "Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "R", level: "Proficient" },
        { name: "JavaScript / TypeScript", level: "Proficient" },
      ],
    },
    {
      id: "data",
      label: "Data Engineering",
      skills: [
        { name: "Apache Spark", level: "Advanced" },
        { name: "PySpark", level: "Advanced" },
        { name: "Databricks", level: "Advanced" },
        { name: "Informatica IICS", level: "Advanced" },
        { name: "ETL / ELT", level: "Advanced" },
        { name: "Data Modeling", level: "Advanced" },
        { name: "Delta Lake", level: "Proficient" },
        { name: "Hadoop", level: "Proficient" },
        { name: "Hive", level: "Proficient" },
      ],
    },
    {
      id: "databases",
      label: "Databases",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Amazon Redshift", level: "Advanced" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Oracle", level: "Proficient" },
        { name: "SQLite", level: "Proficient" },
        { name: "SQL Server", level: "Working Knowledge" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      skills: [
        { name: "AWS", level: "Advanced" },
        { name: "Amazon S3", level: "Advanced" },
        { name: "Amazon Redshift", level: "Advanced" },
        { name: "Databricks", level: "Advanced" },
        { name: "Cloud Data Architecture", level: "Advanced" },
      ],
    },
    {
      id: "ai",
      label: "AI",
      skills: [
        { name: "Large Language Models", level: "Advanced" },
        { name: "Retrieval-Augmented Generation", level: "Advanced" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "AI Analytics", level: "Advanced" },
        { name: "Gemini", level: "Proficient" },
        { name: "OpenAI APIs", level: "Proficient" },
        { name: "NLP Fundamentals", level: "Proficient" },
        { name: "Machine Learning", level: "Proficient" },
      ],
    },
    {
      id: "analytics",
      label: "Analytics & BI",
      skills: [
        { name: "Power BI", level: "Advanced" },
        { name: "Tableau", level: "Proficient" },
        { name: "Plotly", level: "Advanced" },
        { name: "Matplotlib", level: "Proficient" },
        { name: "Pandas", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "Exploratory Data Analysis", level: "Advanced" },
        { name: "Data Storytelling", level: "Advanced" },
        { name: "KPI Development", level: "Advanced" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        { name: "FastAPI", level: "Proficient" },
        { name: "Flask", level: "Proficient" },
        { name: "REST APIs", level: "Proficient" },
        { name: "Python Services", level: "Advanced" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        { name: "Next.js", level: "Proficient" },
        { name: "React", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "Streamlit", level: "Proficient" },
      ],
    },
    {
      id: "devops",
      label: "DevOps",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "CI/CD", level: "Proficient" },
        { name: "Agile", level: "Advanced" },
        { name: "Tidal", level: "Proficient" },
        { name: "Deployment Pipelines", level: "Proficient" },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      skills: [
        { name: "Jupyter", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Tableau", level: "Proficient" },
        { name: "GitHub", level: "Advanced" },
      ],
    },
    {
      id: "soft",
      label: "Professional Skills",
      skills: [
        { name: "Stakeholder Communication", level: "Core" },
        { name: "Technical Documentation", level: "Advanced" },
        { name: "Requirements Analysis", level: "Advanced" },
        { name: "Problem Solving", level: "Core" },
        { name: "Data Storytelling", level: "Advanced" },
        { name: "Cross-functional Collaboration", level: "Core" },
        { name: "Mentoring", level: "Proficient" },
        { name: "Agile Delivery", level: "Advanced" },
      ],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      id: "lakeshore",
      company: "Lakeshore Global Corporation",
      logoText: "LG",
      location: "Detroit, Michigan",
      role: "Data Engineer - Internship",
      start: "Jul 2026",
      end: "Present",
      summary:
        "Building operational data platforms, workforce analytics systems, automated reporting pipelines, and AI-powered analytics solutions supporting business operations.",
      achievements: [
        "Built workforce analytics pipelines to track headcount, hiring, retention, attrition, tenure, labor utilization, and termination trends across operational teams.",
        "Developed automated weekly reporting and analytical workflows that significantly reduced manual data preparation and recurring SQL analysis.",
        "Built an AI-powered analytics platform using Python, PostgreSQL, and interactive dashboards, reducing the time required to generate operational insights by approximately 60%.",
        "Developed a natural-language analytics experience that allows users to query enterprise data conversationally.",
        "Improved natural-language query accuracy by approximately 40% using schema-aware context, retrieval techniques, and prompt optimization.",
        "Integrated structured and semi-structured datasets from multiple operational sources into standardized analytical models.",
        "Built KPI dashboards covering productivity, SLA performance, workforce trends, operational costs, margins, inspections, and safety metrics.",
        "Designed data quality workflows to clean, validate, reconcile, and standardize workforce and operational datasets.",
        "Identified early-turnover patterns through cohort and retention analysis to support workforce planning decisions.",
      ],
      impact: [
        "About 60% less time to generate operational insights.",
        "About 40% better natural-language query accuracy.",
        "Standardized workforce and operational metrics leadership can actually use.",
      ],
      technologies: ["Python", "SQL", "PostgreSQL", "Pandas", "Power BI", "Plotly", "LLMs", "RAG", "Analytics"],
    },
    {
      id: "adaptive-waves",
      company: "Adaptive Waves Inc.",
      logoText: "AW",
      // REPLACE location or dates if these differ from your records.
      location: "United States",
      role: "Data Engineer",
      start: "2025",
      end: "2026",
      summary:
        "Built data-driven applications that connect modern interfaces, Python services, and AI workflows to operational data.",
      achievements: [
        "Developed data-driven web applications combining modern frontend frameworks with Python backend services and database systems.",
        "Built ProjectTrackerV2, a project analytics and management application using Flask, MongoDB, Plotly, and SendGrid.",
        "Developed components of SolveAI, an AI-enabled platform using Next.js, FastAPI, and Gemini.",
        "Designed APIs and backend workflows connecting AI models, application logic, and structured data sources.",
        "Built interactive visualizations and reporting functionality for operational decision-making.",
      ],
      impact: [
        "Shipped analytics and AI product surfaces on top of real application data.",
        "Connected model calls, APIs, and structured sources into usable workflows.",
      ],
      technologies: ["Python", "FastAPI", "Flask", "MongoDB", "Next.js", "React", "Gemini", "Plotly"],
    },
    {
      id: "jio",
      company: "Jio Platforms Limited",
      logoText: "Jio",
      location: "Mumbai, India",
      role: "Data Science Intern",
      start: "Jun 2024",
      end: "Aug 2024",
      summary:
        "Built an enterprise analytics platform that let business users ask questions in natural language instead of writing SQL.",
      achievements: [
        "Turned natural-language questions into SQL across multi-table enterprise datasets using LLMs and retrieval-augmented generation.",
        "Retrieved schema metadata, table relationships, and business definitions so generated queries matched how the data was actually modeled.",
        "Improved query interpretation accuracy by about 40% with schema-aware prompts and better retrieval.",
        "Added parsing, validation, and fallback so invalid SQL was caught before a user saw a broken result.",
        "Worked with business users on the operational KPI and dashboard questions the platform needed to answer.",
      ],
      impact: [
        "Routine reporting no longer had to wait on an analyst to write the SQL.",
        "Faster ad hoc answers for people who do not write queries.",
        "About 40% more accurate interpretation of natural-language questions.",
      ],
      technologies: ["Python", "SQL", "LLMs", "RAG", "LangChain", "OpenAI", "Phi-3", "PostgreSQL", "MongoDB", "Flask", "Streamlit"],
      details: [
        "Project: AI-powered enterprise analytics and natural-language query platform.",
        "Pipeline: parse the question, retrieve schema context, generate SQL, validate it, then format the analytical response.",
        "Python preprocessing and feature work improved the context the model could retrieve.",
      ],
    },
    {
      id: "accenture",
      company: "Accenture",
      logoText: "Ac",
      // REPLACE location or dates if these differ from your records.
      location: "India",
      role: "Data Engineering Analyst",
      start: "2021",
      end: "2023",
      summary:
        "Enterprise-scale healthcare data systems supporting more than 1 million users — cloud migration, data integration, ETL modernization, and production analytics.",
      achievements: [
        "Designed and maintained 50+ enterprise data interfaces supporting large-scale healthcare analytics systems.",
        "Migrated legacy Oracle and Informatica PowerCenter workflows to modern AWS and Informatica IICS architectures.",
        "Improved major data-processing workloads by approximately 40% through incremental processing, workload optimization, and pipeline redesign.",
        "Helped modernize enterprise data pipelines using AWS S3, Informatica IICS, Spark, Databricks, Redshift, and Delta Lake.",
        "Worked across 32+ Agile sprints delivering production data engineering features across multiple business regions.",
        "Supported architectures following layered processing patterns including Raw → Lake → Hub → Mart.",
        "Diagnosed and optimized a production workload requiring approximately 48–50 hours, redesigning processing through data segmentation and incremental loading.",
        "Led and supported a 6-member engineering team, coordinating development, issue resolution, testing, and production delivery.",
        "Supported CI/CD and production deployment processes for enterprise data workloads.",
      ],
      impact: [
        "Systems supporting 1M+ users.",
        "50+ enterprise integrations.",
        "About 40% faster data-processing workloads.",
        "Multi-region production delivery across 32+ sprints.",
      ],
      technologies: ["AWS", "S3", "Databricks", "Spark", "PySpark", "Informatica", "Oracle", "Redshift", "SQL", "ETL"],
      details: [
        "Layered processing: Raw → Lake → Hub → Mart.",
        "Legacy Oracle and Informatica PowerCenter moved toward AWS and Informatica IICS.",
        "Production support included a 48–50 hour workload redesigned with segmentation and incremental loads.",
      ],
    },
  ] satisfies Experience[],

  projects: [
    {
      slug: "ai-analytics-assistant",
      title: "AI Analytics Assistant",
      subtitle: "Natural-language analytics for enterprise data",
      featured: true,
      hidden: true,
      year: "2026",
      imageHint: "ai",
      description:
        "An AI-powered analytics application that lets people ask questions about enterprise datasets in natural language and receive context-aware analytical responses.",
      problem: "Business teams often depend on technical analysts to write SQL and manually investigate operational data.",
      solution:
        "Users ask questions in plain language. The application retrieves schema context, generates SQL, validates it against PostgreSQL, and returns a visualization with the answer.",
      impact: [
        "Reduced manual analytics effort and accelerated insight generation by approximately 60%.",
        "Improved query accuracy by approximately 40% using schema-aware retrieval and prompt optimization.",
      ],
      highlights: [
        "Schema-aware retrieval instead of a generic chat box.",
        "SQL generation with a validation step before results are shown.",
        "Interactive visualizations alongside the written answer.",
      ],
      tech: ["Python", "PostgreSQL", "FastAPI", "LLMs", "RAG", "SQL", "Next.js", "Data Visualization"],
      architecture: [
        "User query",
        "Next.js interface",
        "FastAPI",
        "Schema context + retrieval",
        "LLM",
        "SQL generation",
        "PostgreSQL",
        "Validation",
        "Visualization + response",
      ],
      // REPLACE with the public repository if this work can be shared.
      github: undefined,
      // REPLACE captions with real screenshot descriptions once images are added.
      screenshots: [
        { label: "Question", caption: "Natural-language question against enterprise data." },
        { label: "Answer", caption: "Validated SQL, chart, and written response." },
      ],
    },
    {
      slug: "workforce-intelligence",
      title: "Workforce Intelligence Platform",
      subtitle: "Retention and attrition analytics",
      featured: true,
      hidden: true,
      year: "2026",
      imageHint: "workforce",
      description:
        "An analytical workflow that turns workforce records into standardized weekly metrics and management dashboards.",
      problem:
        "Operational teams needed a reliable way to understand workforce turnover, early attrition, retention, hiring trends, and weekly staffing movement.",
      solution:
        "Workforce records are cleaned into a consistent model, then rolled into weekly hiring, exit, tenure, and cohort metrics leadership can read without a custom SQL request.",
      impact: [
        "Converted fragmented workforce records into standardized management analytics used to identify retention trends and early-turnover patterns.",
      ],
      highlights: [
        "Weekly hires, terminations, true exits, and W2 conversions.",
        "Headcount, tenure, and termination reasons.",
        "7, 14, 30, 60, and 90-day attrition with weekly retention and cohort trends.",
      ],
      tech: ["Python", "Pandas", "SQL", "Excel Analytics", "Power BI", "Data Modeling", "Workforce Analytics"],
      architecture: [
        "Operational workforce sources",
        "Cleaning and reconciliation",
        "Standardized person and event model",
        "Weekly metric mart",
        "Management dashboards",
      ],
      screenshots: [
        { label: "Weekly movement", caption: "Weekly hiring, exits, and headcount." },
        { label: "Early attrition", caption: "Tenure bands and cohort retention." },
      ],
    },
    {
      slug: "healthcare-data-platform",
      title: "Enterprise Healthcare Data Platform",
      subtitle: "Cloud data platform migration",
      featured: true,
      hidden: true,
      year: "2021–2023",
      imageHint: "cloud",
      description:
        "Migration of enterprise healthcare workflows from legacy Oracle and Informatica environments toward AWS-based cloud data processing.",
      problem:
        "Legacy enterprise ETL pipelines were expensive to maintain and contained workloads requiring extremely long processing windows.",
      solution:
        "Interfaces were redesigned around cloud storage and distributed processing, with incremental loads replacing unbounded full refreshes.",
      impact: [
        "About 40% improvement in data-processing performance.",
        "50+ enterprise integrations.",
        "Systems supporting 1M+ users.",
        "Multi-region deployment.",
      ],
      highlights: [
        "Legacy Oracle and Informatica PowerCenter moved toward AWS and Informatica IICS.",
        "Spark and Databricks processing over an S3 raw layer.",
        "Curated data served to Redshift and enterprise reporting.",
      ],
      tech: ["AWS", "S3", "Databricks", "Spark", "PySpark", "Informatica IICS", "Redshift", "Delta Lake", "SQL"],
      architecture: [
        "Enterprise sources",
        "Informatica ingestion",
        "Amazon S3 raw layer",
        "Spark / Databricks processing",
        "Curated data",
        "Redshift and analytics",
        "Enterprise reporting",
      ],
      screenshots: [
        { label: "Platform layers", caption: "Raw, processed, and analytics layers." },
        { label: "Processing", caption: "Workload redesigned around incremental loads." },
      ],
    },
    {
      slug: "solveai",
      title: "SolveAI",
      subtitle: "AI-powered web application",
      featured: true,
      hidden: true,
      year: "2025–2026",
      imageHint: "product",
      description:
        "An AI-enabled web application integrating a modern frontend with FastAPI services and generative AI capabilities.",
      problem: "Product workflows needed a reliable way to call generative models without burying that logic in the interface.",
      solution:
        "A Next.js interface talks to FastAPI services that orchestrate Gemini, prompts, and structured application data.",
      impact: [
        "AI-powered user workflows shipped behind a real API boundary.",
        "Frontend, backend orchestration, and prompt design kept in separate layers.",
      ],
      highlights: [
        "AI-powered user workflows.",
        "API-based model integration.",
        "Modern responsive frontend.",
        "Backend orchestration and prompt engineering.",
      ],
      tech: ["Next.js", "React", "FastAPI", "Python", "Gemini", "REST APIs"],
      architecture: [
        "Next.js interface",
        "REST API",
        "FastAPI orchestration",
        "Gemini model calls",
        "Structured application data",
      ],
      // REPLACE
      github: undefined,
      screenshots: [{ label: "Product", caption: "AI workflow behind a FastAPI boundary." }],
    },
    {
      slug: "airbnb-market-trends",
      title: "Exploring Airbnb Market Trends",
      subtitle: "2019 New York City listings",
      featured: false,
      year: "2026",
      imageHint: "airbnb",
      description:
        "Analyzes 2019 New York City Airbnb listings by combining data stored in CSV, Excel, and TSV, then answers three market questions: review dates, private-room count, and average price.",
      problem:
        "Prices, room types, and last-review dates lived in three files with inconsistent text, including prices such as “225 dollars” and dates such as “May 21 2019.”",
      solution:
        "pandas loads each file, merges them on listing_id, converts last_review to dates, lowercases room_type, strips the price suffix, and summarizes the results in one table.",
      impact: [
        "25,209 listings after the files are merged.",
        "Earliest review January 1, 2019; most recent July 9, 2019.",
        "11,356 private rooms. Average nightly price $141.78.",
      ],
      highlights: [
        "CSV prices and neighborhoods, Excel room types, and TSV host review dates.",
        "Column types and missing values inspected before the summary.",
        "Private rooms are a large share of listings; the typical nightly price is about $142.",
      ],
      tech: ["Python", "pandas", "NumPy", "openpyxl", "Jupyter"],
      architecture: [
        "airbnb_price.csv",
        "airbnb_room_type.xlsx",
        "airbnb_last_review.tsv",
        "Merge on listing_id",
        "Clean dates, room type, and price",
        "One summary DataFrame",
      ],
      github: "https://github.com/stuti-shrimal/Exploring-Airbnb-Market-Trends",
      screenshots: [{ label: "Notebook", caption: "Merged 2019 NYC listings and the four market results." }],
    },
    {
      slug: "car-insurance-claims",
      title: "Modeling Car Insurance Claim Outcomes",
      subtitle: "The single best logistic feature",
      featured: false,
      year: "2026",
      imageHint: "insurance",
      description:
        "Predicts whether a customer will file a car insurance claim during the policy period, and finds the single feature that produces the most accurate logistic regression.",
      problem:
        "On the Road car insurance wants a simple production model they can deploy without a large machine-learning stack.",
      solution:
        "The notebook explores 10,000 policyholders, fills missing credit score and annual mileage with the column mean, then fits a logistic regression of the claim outcome on each remaining feature. Probabilities become 0 or 1 at a 0.5 threshold, and accuracy comes from the confusion matrix.",
      impact: [
        "Driving experience is the strongest single predictor, at 0.7771 accuracy.",
        "About 31% of customers filed a claim.",
        "Newer drivers tend to file claims more often.",
      ],
      highlights: [
        "Every model uses the same 10,000 rows.",
        "id is dropped before the one-feature fits.",
        "A practical starting point for a simple production model.",
      ],
      tech: ["Python", "pandas", "NumPy", "statsmodels", "scikit-learn"],
      architecture: [
        "car_insurance.csv, 18 columns",
        "Explore types, missing values, and distributions",
        "Mean imputation",
        "One logistic regression per feature",
        "Accuracy from the confusion matrix",
      ],
      github: "https://github.com/stuti-shrimal/Modeling-Car-Insurance-Claim-Outcomes",
      screenshots: [{ label: "Result", caption: "Driving experience wins the one-feature comparison." }],
    },
    {
      slug: "credit-card-fraud",
      title: "Credit Card Fraud Detection",
      subtitle: "Scores so analysts review the riskiest cases first",
      featured: false,
      year: "2026",
      imageHint: "fraud",
      description:
        "An end-to-end system that assigns each transaction a fraud probability so a card-issuing bank’s analysts review the highest-risk cases first. The model does not make the final decision.",
      problem:
        "A naïve model that flags every transaction as legitimate looks 99.8% accurate and still catches zero fraud. The useful targets are recall, precision, and a review queue that is not flooded with false alerts.",
      solution:
        "Two days of European card transactions are cleaned, 13 features are engineered on top of the PCA fields, and logistic regression, random forest, and XGBoost are compared. Optuna tunes the winning XGBoost model. A Streamlit app shows live scoring, comparison charts, feature importance, and the confusion matrix.",
      impact: [
        "Tuned XGBoost: 83.7% recall, 84.5% precision, 0.841 F1, 0.979 AUC-ROC.",
        "+24.5 percentage points of recall versus the logistic regression baseline.",
        "492 fraud cases out of 284,807 transactions, about 0.17%.",
      ],
      highlights: [
        "A score between 0 and 1, not a hard block.",
        "Random forest was slower to train and caught less fraud.",
        "Accuracy is the wrong headline: predicting every transaction as legitimate is 99.83% accurate and catches nothing.",
      ],
      tech: ["Python", "pandas", "XGBoost", "Optuna", "scikit-learn", "Streamlit", "MLflow", "Docker"],
      architecture: [
        "Raw CSV, 284,807 rows",
        "EDA",
        "Cleaner and quality gate",
        "13 engineered features",
        "Logistic regression, random forest, then tuned XGBoost",
        "Saved model artifacts",
        "Streamlit scoring app",
      ],
      github: "https://github.com/stuti-shrimal/Credit-Card-Fraud-Detection",
      live: "https://credit-card-fraud-detection-stuti.streamlit.app/",
      screenshots: [{ label: "Scoring app", caption: "Live scores, model comparison, and feature importance." }],
    },
    {
      slug: "hr-analytics",
      title: "HR Analytics Dashboard",
      subtitle: "Attrition, demographics, and satisfaction in Tableau",
      featured: false,
      year: "2026",
      imageHint: "hr",
      description:
        "A Tableau workbook for 1,470 employees and 39 fields, built so HR and leadership can see attrition, demographics, job satisfaction, and workforce composition in one place.",
      problem:
        "Turnover is not one number. Gender, age, education, department, overtime, travel, and satisfaction answer different questions.",
      solution:
        "Seven worksheets cover KPIs, attrition by gender, gender by age band, education, department, job satisfaction, and headcount by age. Calculated fields track attrition count, attrition rate, and active employees. An age-bin parameter runs from 2 to 10.",
      impact: [
        "1,470 employee records and 39 fields, with 7 interactive worksheets.",
        "HR managers, executives, department heads, and talent acquisition can read the same workbook.",
      ],
      highlights: [
        "Attrition by gender, age band, education, and department.",
        "Job satisfaction, environment, relationships, work-life balance, and overtime sit next to turnover.",
        "Filters, highlighting, tooltips, and an adjustable age bin.",
      ],
      tech: ["Tableau Desktop 2025.3", "Excel"],
      architecture: [
        "HR Data.xlsx",
        "Calculated attrition fields",
        "KPI, demographic, and satisfaction worksheets",
        "Age-bin parameter",
        "Executive dashboard",
      ],
      github: "https://github.com/stuti-shrimal/HR-Analytics",
      screenshots: [{ label: "Dashboard", caption: "Attrition KPIs, demographics, and job satisfaction." }],
    },
    {
      slug: "montgomery-traffic",
      title: "Traffic Violation Analysis",
      subtitle: "Montgomery County, Maryland",
      featured: false,
      year: "2024",
      imageHint: "traffic",
      description:
        "Exploratory analysis of real Montgomery County traffic violations to find patterns in violation type, location, time, and driver behavior that can inform road safety, policy, and enforcement.",
      problem:
        "The records mix missing values, inconsistent categories, and raw dates, so frequency and location are hard to read until the file is cleaned.",
      solution:
        "The notebook handles missing and inconsistent values, converts date and time fields, and standardizes categories. It then charts violation frequency, hourly, daily, and monthly trends, and locations with higher volume.",
      impact: [
        "Some violation types occur much more often than others.",
        "Time of day and day of week show clear patterns.",
        "Specific locations and jurisdictions consistently report more violations.",
      ],
      highlights: [
        "Public Montgomery County police violation records.",
        "Bar charts, time-series plots, and location aggregates.",
        "A first look before any predictive model.",
      ],
      tech: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      architecture: [
        "Montgomery County violation records",
        "Clean missing values, dates, and categories",
        "Frequency, time, and location analysis",
        "Charts",
      ],
      github: "https://github.com/stuti-shrimal/Traffic-Violation-Analysis-on-Montgomery-County",
      screenshots: [{ label: "Trends", caption: "Violation type, time of day, and higher-volume locations." }],
    },
    {
      slug: "portfolio-analysis",
      title: "Portfolio Optimization",
      subtitle: "Technical strategies across eight instruments",
      featured: false,
      year: "2026",
      imageHint: "portfolio",
      description:
        "Designs an active multi-asset portfolio with moving-average and Bollinger Band strategies, then optimizes the weights. The target was a Sharpe ratio above 1.0 that beats each strategy on its own.",
      problem:
        "A strong single strategy is not a portfolio. The mix has to survive diversification, optimization, and a later period the weights were not fit on.",
      solution:
        "Shared moving-average and Bollinger parameters generate daily log returns for Apple, Amazon, AT&T, GE, SPY, the Lehman bond index, silver, and the euro. An equal-weighted book is the baseline. A 5,000-step Monte Carlo simulation traces the efficient frontier. The same weights are then applied through October 2022.",
      impact: [
        "In-sample Sharpe ratio 1.28, annualized risk about 6.55%, beta 0.118 versus the S&P 500.",
        "The optimized book beat every individual strategy and the equal-weighted portfolios.",
        "Out of sample, the active portfolio stayed competitive with a passive benchmark.",
      ],
      highlights: [
        "Part A is 1999–2018. Part B checks 2019 through October 2022.",
        "Moving-average windows and Bollinger settings stay the same across assets to limit curve-fitting.",
        "Bonds, silver, and the euro are the low-correlation sleeves.",
      ],
      tech: ["Python", "pandas", "NumPy", "Matplotlib", "Monte Carlo"],
      architecture: [
        "Eight instruments, four asset classes",
        "Moving-average and Bollinger strategies",
        "Correlation matrix",
        "Equal-weighted baseline",
        "5,000-step Monte Carlo frontier",
        "Out-of-sample check through October 2022",
      ],
      github: "https://github.com/stuti-shrimal/Portfolio-Analysis",
      screenshots: [{ label: "Portfolio", caption: "In-sample Sharpe 1.28, then the same weights through October 2022." }],
    },
  ] as Project[],

  /**
   * Only list credentials you actually hold.
   * Power BI and SnowPro belong here only after you pass them.
   * Add course certificates only if you want them — they are optional.
   */
  certifications: [
    {
      name: "Claude Code in Action",
      provider: "Anthropic · Claude Academy",
      date: "Sep 2026",
      credentialUrl: "https://academy.claude.com/verify/8ee9bac7796bf754b3e4a89b06a53d94",
    },
    {
      name: "AI Fluency for Builders",
      provider: "Anthropic · Claude Academy",
      date: "",
      credentialUrl: "https://academy.claude.com/verify/80fed4496288d3d32959488884220f09",
    },
    {
      name: "Databricks Fundamentals",
      provider: "Databricks",
      date: "Aug 2026",
      credentialUrl: "/credentials/Databricks-Fundamentals.pdf",
    },
    {
      name: "Generative AI Fundamentals",
      provider: "Databricks",
      date: "Jun 2024",
      credentialUrl: "https://credentials.databricks.com/e8ef1087-0779-47e0-9943-175079747bd5#acc.zB12GFEq",
    },
  ] satisfies Certification[],

  education: [
    {
      school: "University of Maryland, College Park",
      degree: "Master of Science in Information Systems",
      location: "College Park, Maryland",
      // REPLACE with your graduation term if you want it on the card.
      end: "Graduate program",
      coursework: [
        "Data Analytics",
        "Database Management",
        "Machine Learning",
        "Business Intelligence",
        "Cloud Technologies",
        "Information Systems",
        "Data Visualization",
      ],
      achievements: [
        "Terrapin Scholarship recipient.",
        "Graduate Assistant.",
        "Faculty feedback described the performance as the “Best GA in 4.5 years.”",
      ],
    },
    {
      school: "University of Mumbai",
      degree: "Bachelor of Engineering in Information Technology",
      location: "Mumbai, India",
      end: "Undergraduate program",
      coursework: [
        "Data Structures",
        "Database Systems",
        "Software Engineering",
        "Machine Learning",
        "Computer Networks",
        "Programming",
        "Algorithms",
      ],
      achievements: ["Foundation in systems, data, and software engineering."],
    },
  ] satisfies Education[],

  achievements: [
    {
      category: "Award",
      title: "ACE Award — Accenture",
      detail: "Recognized for professional performance and contribution to enterprise technology delivery.",
      year: "2022",
    },
    {
      category: "Award",
      title: "Informatica Training Merit",
      detail: "Recognized for strong performance during Informatica technical training.",
      year: "2021",
    },
    {
      category: "Award",
      title: "Terrapin Scholarship",
      detail: "Scholarship recipient at the University of Maryland.",
    },
  ] satisfies Achievement[],

  testimonials: [
    {
      placeholder: false,
      name: "University of Maryland Faculty",
      role: "Graduate Assistant supervision",
      quote: "Best GA in 4.5 years.",
    },
    {
      placeholder: true,
      name: "Add a name",
      role: "Manager or teammate · REPLACE",
      quote: "Add a LinkedIn recommendation or manager feedback here.",
    },
    {
      placeholder: true,
      name: "Add a name",
      role: "Stakeholder · REPLACE",
      quote: "Add a LinkedIn recommendation or manager feedback here.",
    },
  ] satisfies Testimonial[],

  articles: [
    {
      slug: "incremental-loads",
      title: "A 48-hour job is a design problem",
      excerpt: "When a healthcare workload needs two days to finish, the fix is segmentation and incremental loading — not a bigger window.",
      date: "2026-03-12",
      readTime: "5 min",
      tags: ["Data engineering", "ETL"],
      body: `A production workload that needs 48–50 hours is not a badge of scale. It is a boundary problem.

The useful move is unglamorous: find the slice of data that actually changed, segment the rest, and make a failed run cheap to restart.

That pattern — incremental processing instead of an unbounded full refresh — is what improved major healthcare data workloads by about 40%. The same idea shows up whether the tool is Informatica, Spark, or Databricks.`,
    },
    {
      slug: "schema-context",
      title: "Natural-language analytics fails without schema context",
      excerpt: "Query accuracy moved about 40% when the model could see the schema, not just the question.",
      date: "2026-06-02",
      readTime: "4 min",
      tags: ["AI", "Analytics"],
      body: `A chat box on top of a warehouse looks finished in a demo and brittle the first week it meets real tables.

The model is rarely the first failure. Overloaded names, missing joins, and three definitions of “active” are.

On an operational analytics platform, schema-aware context, retrieval, and prompt changes improved natural-language query accuracy by about 40%. The interface mattered less than the context the model was allowed to see.`,
    },
    {
      slug: "workforce-definitions",
      title: "Attrition is a modeling problem",
      excerpt: "Weekly hires, true exits, conversions, and early-tenure bands are different facts. Collapsing them makes the dashboard polite and wrong.",
      date: "2026-08-18",
      readTime: "4 min",
      tags: ["Workforce", "Metrics"],
      body: `Workforce reporting breaks at the definitions.

Hires, terminations, true exits, conversions, and tenure are not one number. Early attrition at 7, 14, 30, 60, and 90 days answers a different question than a monthly turnover rate.

Standardizing those metrics is the product. The dashboard is only the last inch.`,
    },
  ] satisfies Article[],

  contact: {
    title: "Let's build systems that make data useful.",
    body: "I'm always interested in conversations around data engineering, analytics infrastructure, AI-powered data products, and challenging engineering problems.",
    note: "Based in the United States · Open to opportunities across Data Engineering, Analytics Engineering, and AI/Data platforms.",
  },

  recruiterSnapshot: {
    who: "Stuti Shrimal — Data Engineer",
    level: "4+ years · enterprise data systems and AI-enabled analytics",
    stack: "Python · SQL · Spark · Databricks · AWS · PostgreSQL · LLMs",
    impact: "1M+ users · 50+ interfaces · ~40% faster loads · ~60% faster analytics",
  },
};

export type Site = typeof site;
export default site;
