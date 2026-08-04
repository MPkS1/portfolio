export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI/ML" | "Web Dev" | "Systems" | "Mobile";
  tags: string[];
  date: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "movenet-pose-detection",
    title: "Pose Detection for Sports Analytics with MoveNet",
    excerpt: "How I used Google's MoveNet SinglePose Lightning model and TensorFlow to build a real-time vertical jump analyser — from keypoint extraction to jump-height calculation.",
    content: "",
    category: "AI/ML",
    tags: ["TensorFlow", "MoveNet", "OpenCV", "Python", "Computer Vision"],
    date: "2024-11-15",
    readTime: 10,
    featured: true,
  },
  {
    id: "real-time-chat-socketio",
    title: "Building Real-Time Chat with MERN & Socket.io",
    excerpt: "A walkthrough of architecting a scalable chat app — JWT auth, Socket.io rooms, Zustand global state, and Tailwind CSS for a polished UI.",
    content: "",
    category: "Web Dev",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Zustand", "Tailwind CSS"],
    date: "2024-09-08",
    readTime: 12,
    featured: true,
  },
  {
    id: "rust-os-development",
    title: "Writing an OS in Rust: UEFI Boot to Kernel",
    excerpt: "My notes on bootstrapping AIOS — a Rust-based experimental OS — from a UEFI bootloader through virtual memory management to an early AI-runtime prototype.",
    content: "",
    category: "Systems",
    tags: ["Rust", "OS Development", "UEFI", "QEMU", "x86_64"],
    date: "2024-07-22",
    readTime: 18,
    featured: false,
  },
  {
    id: "jetpack-compose-firebase",
    title: "Jetpack Compose + Firebase: Multi-Step Auth Flow",
    excerpt: "Step-by-step guide to building a multi-screen authentication flow in Jetpack Compose with Firebase Auth, Firestore, and email verification.",
    content: "",
    category: "Mobile",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Android", "MVVM"],
    date: "2024-05-10",
    readTime: 14,
    featured: false,
  },
];
