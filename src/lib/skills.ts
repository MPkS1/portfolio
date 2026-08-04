export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / ML & Computer Vision",
    icon: "🤖",
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 85 },
      { name: "Google MoveNet", level: 75 },
      { name: "Google Gemini API", level: 70 },
      { name: "NumPy / SciPy", level: 85 },
    ],
  },
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Rust", level: 65 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 85 },
      { name: "Jetpack Compose", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material Design 3", level: 75 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Socket.io", level: 75 },
      { name: "REST APIs / JWT", level: 85 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "🔧",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Android Studio", level: 80 },
      { name: "QEMU", level: 60 },
      { name: "Firebase / Google Cloud", level: 75 },
    ],
  },
  {
    name: "AI Tools & Pair Programming",
    icon: "✨",
    skills: [
      { name: "GitHub Copilot", level: 90 },
      { name: "ChatGPT", level: 90 },
      { name: "Claude", level: 85 },
      { name: "Google Gemini", level: 85 },
    ],
  },
];
