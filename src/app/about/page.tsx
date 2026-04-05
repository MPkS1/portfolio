import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Code, Cpu, Globe, Smartphone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Maddula Purushottama Kumar — AI researcher, full-stack developer, and OS enthusiast.",
};

const expertise = [
  {
    icon: Brain,
    title: "AI / ML & Computer Vision",
    description:
      "Built real-world computer vision systems using TensorFlow and Google's MoveNet for pose detection and sports performance analytics. Experienced with Google Gemini API for AI integration.",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end MERN stack applications with React, Node.js, Express.js, and MongoDB. Real-time features with Socket.io, JWT auth, and state management with Zustand.",
  },
  {
    icon: Smartphone,
    title: "Android / Mobile Development",
    description:
      "Native Android apps in Kotlin with Jetpack Compose, Firebase Auth & Firestore, Material Design 3, and MVVM architecture. Experience with multi-step onboarding and fitness app UX.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Developed QShield AI — a multi-engine phishing detection system using FastAPI, Google Safe Browsing API, WHOIS, behavioural heuristics, and quantum risk assessment.",
  },
  {
    icon: Cpu,
    title: "Systems Programming & OS",
    description:
      "Building AIOS — an experimental Rust-based OS with a UEFI bootloader, virtual memory management, IPC, security modules, and an AI runtime. Developing on x86_64 with QEMU/OVMF.",
  },
  {
    icon: Globe,
    title: "Backend APIs & DevOps",
    description:
      "REST API design with FastAPI and Express.js, Firebase and Google Cloud integrations, Docker, Android Studio, Git/GitHub workflows, and QEMU-based virtualisation.",
  },
];

const timeline = [
  {
    year: "2024–Present",
    title: "AIOS — Rust OS Development",
    org: "Personal Research Project",
    description: "Experimenting with writing an OS from scratch in Rust: UEFI bootloader, kernel, virtual memory, IPC, and an AI multi-agent runtime.",
  },
  {
    year: "2024",
    title: "QShield AI & Sports Evaluate",
    org: "Projects",
    description: "Built a phishing detection backend (FastAPI + Gemini) and a sports fitness Android app (Kotlin + Jetpack Compose + Firebase).",
  },
  {
    year: "2024",
    title: "Vertical Jump Analyzer",
    org: "AI/Computer Vision Project",
    description: "Created a Python tool using TensorFlow MoveNet and OpenCV for automated sports performance analysis.",
  },
  {
    year: "2024",
    title: "MERN Chat App",
    org: "Full-Stack Web Project",
    description: "Developed a real-time chat application with React, Node.js, MongoDB, Socket.io, and JWT authentication.",
  },
  {
    year: "2023",
    title: "React Learning Platform",
    org: "Educational Project",
    description: "Built an interactive React curriculum covering hooks, state management, and component architecture using Vite.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About Me"
          title="Maddula Purushottama Kumar"
          description="AI researcher, full-stack developer, Android engineer, and OS enthusiast — building across the entire stack."
        />

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-20 text-gray-600 dark:text-gray-400 space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m Maddula Purushottama Kumar — a developer and researcher who loves working
            at the intersection of AI, systems programming, and real-world applications. My work
            spans computer vision pipelines, full-stack web platforms, native Android apps, a
            cybersecurity backend, and an experimental operating system written in Rust.
          </p>
          <p>
            From analysing vertical jumps with Google&apos;s MoveNet pose-detection model to
            bootstrapping a UEFI bootloader in bare-metal Rust, I enjoy tackling technically
            diverse challenges and shipping projects end-to-end.
          </p>
          <p>
            I&apos;m always exploring new domains — whether that&apos;s Jetpack Compose for
            Android, quantum-inspired risk scoring for phishing detection, or AI runtime
            orchestration inside an OS kernel. I believe the best engineers are generalists
            who go deep when it matters.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Areas of Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Project Journey
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year + item.title} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white mt-0.5">{item.title}</h3>
                  <p className="text-sm text-indigo-500 dark:text-indigo-400 mb-1">{item.org}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
