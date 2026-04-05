export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "AI/ML" | "Web Dev" | "Research" | "Open Source";
  github?: string;
  demo?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "neuralchat",
    title: "NeuralChat",
    description: "Production-ready AI chatbot powered by GPT-4 with context memory, multi-turn conversations, and real-time streaming responses.",
    longDescription: "NeuralChat is a full-stack AI chatbot application that leverages GPT-4 for intelligent conversations. It features persistent context memory using vector embeddings, real-time streaming via Server-Sent Events, and a clean React frontend. The FastAPI backend handles authentication, rate limiting, and conversation history management.",
    tech: ["Python", "FastAPI", "React", "GPT-4", "PostgreSQL", "Redis", "Docker"],
    category: "AI/ML",
    github: "https://github.com/mpks1/neuralchat",
    demo: "https://neuralchat.demo.com",
    featured: true,
    year: 2024,
  },
  {
    id: "visionflow",
    title: "VisionFlow",
    description: "Real-time computer vision pipeline for object detection, segmentation, and tracking with a modular plugin architecture.",
    longDescription: "VisionFlow is a high-performance computer vision pipeline built with PyTorch and OpenCV. It supports real-time object detection using YOLOv8, instance segmentation, and multi-object tracking. The modular architecture allows easy swapping of models and preprocessing steps.",
    tech: ["Python", "PyTorch", "OpenCV", "YOLOv8", "NumPy", "CUDA"],
    category: "AI/ML",
    github: "https://github.com/mpks1/visionflow",
    featured: true,
    year: 2024,
  },
  {
    id: "portfolioos",
    title: "PortfolioOS",
    description: "This portfolio website — a fast, accessible, and beautifully animated site built with Next.js 14 and Framer Motion.",
    longDescription: "PortfolioOS is the portfolio website you are currently viewing. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS, it features smooth Framer Motion animations, dark/light mode, a responsive design, and near-perfect Lighthouse scores.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-themes"],
    category: "Web Dev",
    github: "https://github.com/mpks1/portfolio",
    demo: "https://mk.dev",
    featured: true,
    year: 2025,
  },
  {
    id: "researchbot",
    title: "ResearchBot",
    description: "Automated literature review tool that searches, summarises, and synthesises academic papers using LangChain and HuggingFace.",
    longDescription: "ResearchBot automates the tedious process of academic literature review. It searches arXiv, Semantic Scholar, and PubMed, downloads relevant papers, extracts key findings using LLMs, and generates structured summaries. Researchers can ask natural-language questions about a corpus of papers.",
    tech: ["Python", "LangChain", "HuggingFace", "FAISS", "arXiv API", "Streamlit"],
    category: "Research",
    github: "https://github.com/mpks1/researchbot",
    featured: false,
    year: 2024,
  },
  {
    id: "opendataviz",
    title: "OpenDataViz",
    description: "Open-source React data visualization library with 20+ chart types, smooth animations, and full TypeScript support.",
    longDescription: "OpenDataViz is a lightweight, composable data visualization library for React. It wraps D3.js with a React-friendly API, provides 20+ chart types, supports real-time data updates with smooth transitions, and is fully typed with TypeScript.",
    tech: ["D3.js", "React", "TypeScript", "Rollup", "Vitest", "Storybook"],
    category: "Open Source",
    github: "https://github.com/mpks1/opendataviz",
    demo: "https://opendataviz.dev",
    featured: false,
    year: 2023,
  },
  {
    id: "automl-pipeline",
    title: "AutoML Pipeline",
    description: "End-to-end automated machine learning workflow with hyperparameter tuning, model selection, and Docker-based deployment.",
    longDescription: "AutoML Pipeline automates the entire ML workflow from data ingestion to model deployment. It uses Optuna for hyperparameter optimisation, supports multiple ML frameworks via a unified API, and packages trained models as Docker containers ready for production deployment.",
    tech: ["Python", "Scikit-learn", "Optuna", "Docker", "MLflow", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/mpks1/automl-pipeline",
    featured: false,
    year: 2023,
  },
];

export const categories = ["All", "AI/ML", "Web Dev", "Research", "Open Source"] as const;
export type Category = (typeof categories)[number];
