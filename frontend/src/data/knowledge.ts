export interface KnowledgeDomain {
  id: string;
  title: string;
  focus: string;
  technologies: string[];
}

export const KNOWLEDGE_DOMAINS: KnowledgeDomain[] = [
  {
    id: "ai-ml",
    title: "AI & MACHINE LEARNING",
    focus: "Developing and deploying models for computer vision, natural language processing, and general machine learning tasks.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn"
    ]
  },
  {
    id: "data-analytics",
    title: "DATA & ANALYTICS",
    focus: "Extracting insights from data using statistical analysis, visualization, and business intelligence tools.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Excel",
      "Data Analysis"
    ]
  },
  {
    id: "generative-ai",
    title: "GENERATIVE AI",
    focus: "Building AI systems using retrieval, LLMs, agentic workflows, and knowledge-based systems.",
    technologies: [
      "RAG",
      "Agentic AI",
      "LLMs",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases",
      "Groq"
    ]
  },
  {
    id: "cloud-engineering",
    title: "CLOUD & ENGINEERING",
    focus: "Deploying, scaling, and managing infrastructure and applications in cloud environments.",
    technologies: [
      "AWS",
      "Linux",
      "Docker",
      "Git",
      "Kubernetes",
      "Terraform",
      "CI/CD"
    ]
  },
  {
    id: "programming",
    title: "PROGRAMMING",
    focus: "Writing clean, efficient, and scalable code across multiple languages for backend and frontend systems.",
    technologies: [
      "Python",
      "C++",
      "SQL",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    id: "databases",
    title: "DATABASES",
    focus: "Designing and managing relational and vector databases for robust data storage and retrieval.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Qdrant"
    ]
  }
];
