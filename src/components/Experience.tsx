import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EXPERIENCES } from "@/constants/experiences";

const INTERSECTION_THRESHOLD = 0.1;
const ANIMATION_DELAY_MULTIPLIER = 200;

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 hidden md:block" />

          {/* Experiences */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * ANIMATION_DELAY_MULTIPLIER}ms`,
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Content */}
                  <div className="md:w-[calc(50%-2rem)] mb-8 md:mb-0">
                    <div
                      className={`group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border transition-all duration-300 ${
                        activeIndex === index
                          ? "border-cyan-400/50 shadow-lg shadow-cyan-500/20 scale-105"
                          : "border-cyan-500/20 hover:border-cyan-400/50"
                      }`}
                    >
                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-400 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Role & Company */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                          {exp.role}
                        </h3>
                        <p className="text-lg text-cyan-400 font-semibold mb-2">
                          {exp.company}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1.5 flex-shrink-0">
                              ▹
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-cyan-400 border-cyan-400 scale-150 shadow-lg shadow-cyan-400/50"
                          : "bg-background border-cyan-500"
                      }`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
