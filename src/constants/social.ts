import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, href: "https://github.com/Muneeb-Aslam", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muneeb-aslaam/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:muneebbaslam@gmail.com", label: "Email" },
];
