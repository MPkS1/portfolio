import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { Brain, Code, FlaskConical, Globe, Rocket, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about MK — AI researcher, developer, and open-source enthusiast.",
};

const expertise = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Deep expertise in supervised, unsupervised, and reinforcement learning. Experienced with PyTorch, TensorFlow, and the HuggingFace ecosystem.",
  },
  {
    icon: FlaskConical,
    title: "AI Research",
    description:
      "Published work on LLM fine-tuning, RAG architectures, and computer vision. Passionate about bridging research and production.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building end-to-end products with Next.js, FastAPI, and TypeScript. Focused on performance, accessibility, and great UX.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description:
      "Active contributor to the open-source community. Maintainer of several libraries in the AI/ML and web development space.",
  },
  {
    icon: Rocket,
    title: "MLOps & Deployment",
    description:
      "Experienced in deploying ML models to production using Docker, Kubernetes, and cloud platforms (AWS, GCP).",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Passionate about teaching AI/ML concepts. I write blog posts, give talks, and mentor junior engineers.",
  },
];

const timeline = [
  {
    year: "2024–Present",
    title: "Senior AI Engineer",
    org: "AI Startup (Stealth)",
    description: "Leading the development of production RAG systems and LLM fine-tuning pipelines.",
  },
  {
    year: "2022–2024",
    title: "ML Engineer",
    org: "Tech Company",
    description:
      "Built computer vision systems for real-time object detection deployed at scale.",
  },
  {
    year: "2020–2022",
    title: "MSc Computer Science (AI)",
    org: "University",
    description:
      "Specialised in deep learning and natural language processing. Thesis on efficient transformer architectures.",
  },
  {
    year: "2017–2020",
    title: "BSc Computer Science",
    org: "University",
    description:
      "Strong foundations in algorithms, data structures, and software engineering.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About Me"
          title="Building intelligent systems"
          description="I'm MK — an AI researcher and full-stack developer who loves turning complex ideas into elegant, working software."
        />

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-20 text-gray-600 dark:text-gray-400 space-y-4 text-lg leading-relaxed">
          <p>
            I spend most of my time at the intersection of AI research and software engineering —
            whether that means fine-tuning large language models, building real-time computer vision
            systems, or crafting performant web applications.
          </p>
          <p>
            My background spans both academia (MSc in AI, several published papers) and industry
            (production ML systems serving millions of users). I believe great AI products require
            both rigorous research thinking and pragmatic engineering.
          </p>
          <p>
            Outside of work I contribute to open source, write about AI on my blog, and enjoy
            running, reading, and playing chess.
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
            Journey
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-12">
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
