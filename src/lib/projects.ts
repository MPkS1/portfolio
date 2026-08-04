export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "AI/ML" | "Web Dev" | "Mobile" | "Systems" | "Cybersecurity";
  github?: string;
  demo?: string;
  featured: boolean;
  year: number;
  aiTools?: string[];
  aiDetails?: string;
}

export const projects: Project[] = [
  {
    id: "vertical-jump-analyzer",
    title: "Vertical Jump Analyzer",
    description: "Comprehensive vertical jump analysis tool using Google's MoveNet pose detection to calculate explosive strength metrics in real time.",
    longDescription: "A Python-based sports science tool that leverages TensorFlow's MoveNet pose-detection model and OpenCV to analyse video footage of vertical jumps. It automatically detects take-off and landing frames, computes jump height, peak velocity, and explosive strength metrics, and renders annotated overlays and analytics graphs using Matplotlib and SciPy. Designed to assist coaches and athletes with objective, data-driven performance evaluation.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib", "SciPy", "MoveNet"],
    category: "AI/ML",
    github: "https://github.com/MPkS1/vertical-jump-analyzer",
    featured: true,
    year: 2024,
    aiTools: ["GitHub Copilot", "ChatGPT"],
    aiDetails: "MoveNet integration architecture guided by Copilot; analytics pipeline algorithms suggested by ChatGPT.",
  },
  {
    id: "mern-chat-app",
    title: "MERN Real-Time Chat App",
    description: "Guided learning build where I studied an open-source implementation to understand JWT auth, real-time messaging, state management, and backend workflows.",
    longDescription: "Built as a guided learning project by studying an open-source implementation. I explored the architecture, understood the authentication flow, real-time Socket.io messaging, Zustand state management, MongoDB integration, and deployment process, then customized features, debugged edge cases, and used it as a hands-on learning experience. The stack includes React, Node.js, Express.js, MongoDB, Socket.io, JWT, Zustand, Tailwind CSS, and Cloudinary.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Daisy UI", "Zustand", "JWT"],
    category: "Web Dev",
    github: "https://github.com/MPkS1/mern-chat-app-master",
    featured: true,
    year: 2024,
    aiTools: ["GitHub Copilot", "ChatGPT"],
    aiDetails: "Learning notes, debugging support, and architecture understanding were accelerated with AI assistance.",
  },
  {
    id: "sports-evaluate-android",
    title: "Sports Evaluate — Android App",
    description: "Android app for sports fitness evaluation featuring multi-step onboarding, Firebase auth, fitness test selection, and an AI integration layer.",
    longDescription: "A Kotlin/Jetpack Compose Android application for comprehensive sports fitness assessment. It implements a multi-step authentication flow with Firebase Auth and email verification, guided profile setup collecting biometric data (Aadhaar ID, height, weight), and a dashboard for selecting and running standardised fitness tests. Built with MVVM architecture, Material Design 3 components, Coil for image loading, and JavaMail for email notifications. Includes placeholder integration points for future AI-powered coaching.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Firebase Firestore", "Material Design 3", "Coil", "JavaMail", "MVVM"],
    category: "Mobile",
    github: "https://github.com/MPkS1/sports-evaluate-android",
    featured: true,
    year: 2024,
    aiTools: ["GitHub Copilot", "Google Gemini"],
    aiDetails: "Jetpack Compose UI patterns and MVVM boilerplate generated with Copilot; Firebase integration guidance from Gemini.",
  },
  {
    id: "qshield-ai",
    title: "QShield AI — Phishing Detection",
    description: "Multi-engine phishing detection backend combining behavioural analysis, URL validation, Safe Browsing API, and quantum risk scoring.",
    longDescription: "A Python/FastAPI backend service that analyses URLs for phishing threats using multiple detection engines: Google Safe Browsing API for known threats, WHOIS-based domain-age analysis, behavioural heuristics, and a novel quantum risk-assessment module that scores encryption weaknesses. The system returns a composite risk score with detailed breakdowns. It includes a demo mode for evaluation without live API keys and exposes a clean REST API ready for frontend or browser-extension consumption.",
    tech: ["Python", "FastAPI", "Google Gemini API", "Safe Browsing API", "WHOIS", "Quantum Risk Assessment"],
    category: "Cybersecurity",
    github: "https://github.com/MPkS1/squid_game_73",
    featured: true,
    year: 2024,
    aiTools: ["ChatGPT", "Google Gemini"],
    aiDetails: "Quantum risk scoring concept developed with ChatGPT; Gemini API integration and heuristic rules refined with Gemini.",
  },
  {
    id: "aios",
    title: "AIOS — Rust-Based OS",
    description: "Experimental Rust operating system with a UEFI bootloader, multi-agent AI runtime, virtual memory management, and IPC security modules.",
    longDescription: "An experimental operating system written in Rust targeting x86_64, built to explore AI-integrated system design. AIOS features a UEFI bootloader, a bare-metal kernel, virtual memory management, inter-process communication primitives, and pluggable security capability modules. The AI runtime layer supports multi-agent orchestration designed to run inference workloads directly in kernel space. The project uses QEMU/OVMF for virtualised development and PowerShell build automation.",
    tech: ["Rust", "x86_64", "UEFI", "QEMU", "OVMF", "PowerShell"],
    category: "Systems",
    github: "https://github.com/MPkS1/AIOS",
    featured: true,
    year: 2024,
    aiTools: ["Claude", "ChatGPT"],
    aiDetails: "Low-level Rust kernel patterns and memory management strategies guided by Claude; UEFI bootloader design with ChatGPT.",
  },
  {
    id: "react-learning",
    title: "React Learning Platform",
    description: "Interactive educational platform with hands-on modules covering React fundamentals, hooks, state management, and component architecture.",
    longDescription: "An educational web application built with React, JavaScript, and Vite that provides a structured, interactive curriculum for learning modern React development. It covers core concepts including JSX, component design, props, hooks (useState, useEffect, useContext), state management patterns, and routing. Each module includes live code examples and guided exercises to reinforce learning.",
    tech: ["React", "JavaScript", "Vite"],
    category: "Web Dev",
    github: "https://github.com/MPkS1/REACT--LEARNING-",
    featured: false,
    year: 2023,
    aiTools: ["GitHub Copilot", "ChatGPT"],
    aiDetails: "Curriculum structure and interactive exercise scaffolding developed with Copilot and ChatGPT.",
  },
];

export const categories = ["All", "AI/ML", "Web Dev", "Mobile", "Systems", "Cybersecurity"] as const;
export type Category = (typeof categories)[number];
