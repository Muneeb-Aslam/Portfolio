export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    title: "BusinessMajlis",
    description:
      "A comprehensive M&A platform connecting business owners, investors, financing seekers, and advisors. Features smart matchmaking algorithms, multilingual support (English, German, Arabic), streamlined transaction workflows, and GDPR-compliant data handling. Enables seamless connections for business sales, investments, and financing opportunities.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "Zod",
      "Lucide Icons",
      "i18n",
      "Localization",
      "lazy Loading",
      "SEO",
      "Accessibility",
      "Motion",
    ],
    live: "https://businessmajlis-frontend.vercel.app/",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Medical Certificate Online",
    description:
      "A comprehensive digital healthcare platform enabling users in Pakistan to obtain PMDC-approved medical certificates online. The platform offers three types of certificates: Sick Leave Certificates for employees and students, Medical Fitness Certificates for job applications, college admissions, sports, and travel, and Driving License Medical Certificates (Form B) required by National Highway & Motorway Police. Features include 24/7 availability, instant digital delivery via email and WhatsApp, secure encrypted data handling, online certificate verification system, and seamless payment processing.",
    technologies: [
      "React.js",
      "TypeScript",
      "React-Hook-Form",
      "ShadCN UI",
      "Zod",
      "Tailwind CSS",
      "Axios",
      "Redux Toolkit",
    ],
    live: "https://certificate-app-one.vercel.app/",
    gradient: "from-green-500 to-emerald-500",
  },
];
