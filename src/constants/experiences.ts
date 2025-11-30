export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Squadly",
    location: "Remote - Australia",
    period: "Sep 2024 - Present",
    description: [
      "Developed scalable, high-performance React.js applications within NX Monorepo architecture.",
      "Managed global state with Redux & Redux Saga to streamline asynchronous API logic.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "Redux Saga",
      "TypeScript",
      "ShadCN UI",
      "Tailwind CSS",
      "Prime React",
      "Docker",
      "NX Monorepo",
      "Microservices",
      "Bitbucket",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Tbox Solutionz",
    location: "Remote - Pakistan",
    period: "Nov 2023 - July 2024",
    description: [
      "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed RESTful APIs with Express.js for seamless frontend-backend communication.",
      "Improved application efficiency by implementing a modular backend architecture.",
      "Used Git for version control and contributed to cross-functional team collaboration.",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Ant Design",
      "Git",
      "GitHub",
      "Bitbucket",
      "Redux",
      "Redux Saga",
      "TypeScript",
      "ShadCN UI",
      "Tailwind CSS",
    ],
  },
  {
    role: "Software Engineer",
    company: "Zak Studio",
    location: "Remote - Pakistan",
    period: "May 2024 - Sep 2024",
    description: [
      "Developed Next.js & TypeScript applications for the e-commerce sector.",
      "Created a responsive and visually appealing UI with ShadCN UI and Tailwind CSS.",
      "Improved SEO and load time performance using Next.js SSR and CSR techniques.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "ShadCN UI",
      "Tailwind CSS",
      "Redux",
      "Redux Saga",
    ],
  },
];
