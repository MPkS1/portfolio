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
    name: "AI / ML",
    icon: "🤖",
    skills: [
      { name: "Python", level: 95 },
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "HuggingFace", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas / NumPy", level: 95 },
    ],
  },
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Bash", level: 75 },
      { name: "Rust", level: 55 },
    ],
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    name: "Tools",
    icon: "🔧",
    skills: [
      { name: "Git", level: 95 },
      { name: "AWS", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter", level: 90 },
      { name: "Linux", level: 85 },
    ],
  },
];
