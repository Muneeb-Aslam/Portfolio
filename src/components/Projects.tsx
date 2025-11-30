import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { PERSONAL_INFO } from "@/constants/personal";

const INTERSECTION_THRESHOLD = 0.1;
const ANIMATION_DELAY_MULTIPLIER = 100;

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building
            scalable, user-centric applications with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * ANIMATION_DELAY_MULTIPLIER}ms`,
              }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`}
                />

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col justify-between ">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
                            aria-label={`View ${project.title} code on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 text-sm font-medium"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${project.gradient} opacity-0 group-hover:opacity-20 rounded-br-2xl transition-opacity duration-300 blur-2xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            aria-label="View more projects on GitHub"
          >
            <Github className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-white">
              View More on GitHub
            </span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
